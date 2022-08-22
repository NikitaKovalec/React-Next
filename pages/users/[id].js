import MainContainer from "../../components/MainContainer";
import Button from "@mui/material/Button";
import Link from "next/link";
import Typography from "@mui/material/Typography";

export default function ({user}) {
	return (
		<MainContainer pageName={'Пользователи'}>
			<div style={{marginTop: '80px'}}>
				<Typography variant="h5" component="div">Номер пользователя №{user.id}</Typography>
				<Link href={'/users'}>
					<Button variant="contained" style={{marginTop: '20px'}}>Назад</Button>
				</Link>
			</div>
		</MainContainer>
	)
}

export async function getServerSideProps({params}) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
	// const response = await fetch(`http://localhost:3000/users/${id}`)
	const user = await response.json()
	return {
		props: {user}, // will be passed to the page component as props
	}
}