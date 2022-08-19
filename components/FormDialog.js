import * as React from 'react';
import {useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
	const [open, setOpen] = React.useState(false)
	const [value, setValue] = useState('')

	const handleClickOpen = () => {
		setOpen(true)
	}
	const fetchEmail = async () => {
		if (value !== '') {
			try {
				const result = await fetch('https://jsonplaceholder.typicode.com/posts', {
					mode: 'cors',
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({value})
				})
				if (result.ok) {
					window.alert("Отправлено")
				} else {
					throw new Error('Ошибка')
				}
			} catch (err) {
				console.log(err.message)
			} finally {
				setValue('')
				setOpen(false)
			}
		}
	}

	const handleClose = () => {
		setValue('')
		setOpen(false)
	}

	return (
		<div>
			<Button variant="contained" onClick={handleClickOpen}>
				Оставить заявку
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<img style={{width: '60px', margin: '24px 0 0 16px'}}
						 src="https://www.notion.so/cdn-cgi/image/format=auto,width=64,quality=100/front-static/pages/product/spot/spot-ecosystem.png"/>
				<DialogTitle>Подписаться на рассылку</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Чтобы подписаться на этот сайт, пожалуйста, введите свой адрес электронной почты здесь. Мы
						будет присылать обновления время от времени.
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label={<div style={{color: value !== '' ? 'inherit' : '#ff1744'}}>Введите Email</div>}
						type="email"
						fullWidth
						variant="standard"
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Выход</Button>
					<Button onClick={fetchEmail}>Подписаться</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

