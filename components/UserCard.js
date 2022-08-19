import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function UserCard({userName, email, website, phone, id}) {
	return (
		<Grid item md={4}>
			<Card sx={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
				justifyContent: 'center',
				padding: '20px 0'
			}}>
				<CardContent>
					<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
						{email}
					</Typography>
					<Typography variant="h5" component="div">
						{userName}
					</Typography>
					<Typography sx={{mb: 1.5}} color="text.secondary">
						{phone}
					</Typography>
					<Typography variant="body2">
						{website}
					</Typography>
				</CardContent>
				<CardActions>
					<Link href={`users/${id}`}>
						<Button variant="outlined">Learn More</Button>
					</Link>
				</CardActions>
			</Card>
		</Grid>
	);
}