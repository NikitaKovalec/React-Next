import MainContainer from "../components/MainContainer";
import {useEffect, useState} from "react";

const Users = () => {
	const [users, setUsers] = useState([])

	useEffect(async() => {
		const response = await fetch('https://jsonplaceholder.typicode.com/users')
		const data = await response.json()
		setUsers(data)
	}, [])

	return (
		<MainContainer pageName={'Пользователи'}>
			<h1 style={{marginTop: '80px'}}>Список пользователей</h1>
			<ul>
				{users.map(user =>
					<li key={user.id}></li>
				)}
			</ul>
		</MainContainer>
	);
};

export default Users;