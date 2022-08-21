import * as React from 'react';
import {useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useRouter} from 'next/router'
import MainContainer from "../components/MainContainer";

export default function Registration() {
	const [name, setName] = useState('')
	const [pass, setPass] = useState('')
	const router = useRouter()

	const createUser = async () => {
		if (name || pass !== '') {
			try {
				const result = await fetch('http://localhost:3000/createUser/', {
					mode: 'cors',
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({name, pass})
				})
				if (result.ok) {
					await router.push('/')
				} else {
					throw new Error('Ошибка')
				}
			} catch (err) {
				console.log(err.message)
			} finally {
				setPass('')
				setName('')
			}
		}
	}


	return (
			<MainContainer pageName={'Регистрация'}>
				<h1 style={{marginTop: '80px'}}>Регистрация</h1>
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
				<Button variant="outlined" onClick={createUser}>Зарегистрироваться</Button>
			</MainContainer>
	);
}

