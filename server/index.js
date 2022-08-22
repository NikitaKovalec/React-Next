require('dotenv').config()
const cors = require('cors')
const express = require('express')
const next = require('next')
const cookieParser = require('cookie-parser')
const crypto = require('crypto')
const {Sequelize, DataTypes} = require('sequelize')
const sequelize = new Sequelize('userList', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
})
const PORT = 3000
const User = sequelize.define('user', {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: DataTypes.STRING,
}, {
  tableName: 'users',
  indexes: [
    {
      unique: true,
      fields: ['userName']
    }
  ]
})

User.sync()
  .then(() => {
    console.log('Подключено')
  })
  .catch((err) => {
    console.log('Ошибка' + err.message);
  })
const dev = process.env.NODE_ENV !== 'production'
const clientApp = next({dev, dir: '../'})
const handle = clientApp.getRequestHandler()
const password = process.env.APP_SECRET
const key = crypto.scryptSync(password, 'salt', 32)
const iv = Buffer.alloc(16, 0)

clientApp.prepare().then(() => {
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(cookieParser())
  app.use(express.urlencoded({extended: false}))

  app.post('/login', async (req, res) => {
    if (!req.body) return res.status(400).send('Заполните поля')
    try {
      const user = await User.findOne({where: {userName: req.body.name}})
      if (!user) return res.status(404).send('Нет такого пользователя')
      const passForHash = req.body.pass
      const salt = req.body.name
      const hash = crypto.createHash('sha512', salt).update(passForHash).digest('hex')

      if (user.password === hash) {
        let userId = JSON.stringify(user.id)

        function encrypt(string) {
          const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv)
          let encrypted = cipher.update(string, 'utf8', 'hex')
          encrypted += cipher.final('hex')
          return encrypted
        }

        res.cookie('user_session', encrypt(userId), {httpOnly: true})
        res.json(user)
      } else {
        res.status(401).send('Ошибка введенных данных')
      }
    } catch (err) {
      await console.log(err.message)
      res.status(500).send('Непредвиденная ошибка. Попробуйте позже')
    }
  })

  app.post('/createUser', async (req, res) => {
    if (!req.body) return res.status(400).send('Заполните поля')
    try {
      const passForHash = req.body.pass
      const salt = req.body.name
      const hash = crypto.createHash('sha512', salt).update(passForHash).digest('hex')
      await User.create({userName: req.body.name, password: hash})
      res.json('Пользователь создан')
    } catch (err) {
      await console.log(err.message)
      res.status(500).send('Непредвиденная ошибка. Попробуйте позже')
    }
  })

  app.post('/logout', async (req, res) => {
    res.clearCookie('user_session')
    res.send('Вы вышли')
  })

  app.get('*', async (req, res) => {
    try {
      const cookies = req.cookies
      const encryptedUserId = cookies.user_session

      function decrypt(string) {
        const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv)
        let decrypted = decipher.update(string, 'hex', 'utf8')
        decrypted += decipher.final('utf8')
        return decrypted
      }

      let userObj = null
      if (encryptedUserId) {
        userObj = (await User.findOne({where: {id: decrypt(encryptedUserId)}})).dataValues
      }
      req.user = userObj
      return handle(req, res)
    } catch (err) {
      console.log(err)
    }
  })

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`)
  })
}).catch(ex => {
  console.error(ex.stack)
  process.exit(1)
})
