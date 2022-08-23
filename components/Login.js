import * as React from 'react';
import {useContext, useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useRouter} from 'next/router'
import {UserContext} from "../context";

export default function Login() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const {setUser} = useContext(UserContext)
  const router = useRouter()

  const handleClickOpen = () => {
    setOpen(true)
  }
  const fetchEmail = async () => {
    if (name || pass !== '') {
      try {
        const result = await fetch('http://localhost:3000/login/', {
          mode: 'cors',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name, pass})
        })
        if (result.ok) {
          const loginUser = await result.json()
          setUser(loginUser)
          await router.push('/profile')
        } else {
          throw new Error('Ошибка')
        }
      } catch (err) {
        console.log(err.message)
        setUser(null)
      } finally {
        setPass('')
        setName('')
        setOpen(false)
      }
    }
  }

  const handleClose = () => {
    setPass('')
    setName('')
    setOpen(false)
  }

  return (
    <div style={{marginRight: '20px'}}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Войти
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Войти</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Заполните поля для входа
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label='Email'
            type="email"
            fullWidth
            variant="standard"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="outlined-password-input"
            label='Пароль'
            type="password"
            fullWidth
            variant="standard"
            autoComplete="current-password"
            value={pass}
            onChange={e => setPass(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => router.push('/registration')}>Регистрация</Button>
          <Button variant="outlined" onClick={fetchEmail}>Войти</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export const getServerSideProps = async () => ({ props: {} });