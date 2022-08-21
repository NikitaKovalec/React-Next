import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from "next/link";
import Typography from "@mui/material/Typography";
import FormDialog from "../components/FormDialog";
import Login from "../components/Login";

const ResponsiveAppBar = () => {
	return (
		<AppBar position="fixed" sx={{bgcolor: 'white'}}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
						}}
					>
						<img alt={'image'} style={{height: '36px'}} src={'https://weeek.net/uploads/e9ec2a509277e16b4de54394476764cc.png'}/>
					</Typography>
					<Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
						<Link href="/">
							<Button
								size='small'
								sx={{my: 1, color: 'black', display: 'block'}}
							>
								Главная
							</Button>
						</Link>
						<Link href="./users">
							<Button
								size='small'
								sx={{my: 1, color: 'black', display: 'block'}}
							>
								Пользователи
							</Button>
						</Link>
					</Box>
					<Login />
					<FormDialog />
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
