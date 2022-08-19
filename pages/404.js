import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function Error() {
	return (
		<div style={{
			height: '100vh',
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column',
			justifyContent: 'center',
		}}>
			<Typography variant="h1" component="div">Страница не найдена, а Герман лох. Ну и браза мой</Typography>
			<Link href={'/'}>
				<Button variant="contained" style={{marginTop: '20px'}}>На главную</Button>
			</Link>
		</div>
	)
}