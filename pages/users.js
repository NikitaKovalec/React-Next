import MainContainer from "../components/MainContainer";
import UserCard from "../components/UserCard";
import {Grid} from "@mui/material";

const Users = ({users}) => {

	return (
		<MainContainer pageName={'Пользователи'}>
			<h1 style={{marginTop: '80px'}}>Список пользователей</h1>
			<Grid container spacing={5}>
				{users.map(({id, username, email, website, phone}) =>

						<UserCard
							key={id}
							userName={username}
							email={email}
							website={website}
							phone={phone}
							id={id}
						/>

				)}
			</Grid>
		</MainContainer>
	);
};

export default Users

export async function getStaticProps(context) {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const users = await response.json()
	return {
		props: {users}, // will be passed to the page component as props
	}
}