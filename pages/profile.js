import MainContainer from "../components/MainContainer"
import Button from "@mui/material/Button";
import {useRouter} from "next/router";
import {useContext} from "react";
import {UserContext} from "../context";

const Profile = () => {
	const router = useRouter()
	const {setUser} = useContext(UserContext)

	const fetchLogOut = async () => {
		try {
			const result = await fetch('http://localhost:3000/logout', {
				mode: 'cors',
				method: 'POST',
			})
			if (result.ok) {
				window.alert('Вы вышли')
				setUser(null)
				await router.push('/')
			} else {
				throw new Error('Ошибка')
			}
		} catch (err) {
			console.log(err.message)
		}
	}

	return (
			<MainContainer pageName={'Пользователи'}>
				<h1 style={{marginTop: '80px'}}>Персональный Кабинет</h1>
				<Button onClick={fetchLogOut}>Выйти</Button>
			</MainContainer>
	)
}

export default Profile

export const getServerSideProps = async () => ({ props: {} });