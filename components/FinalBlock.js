import Typography from "@mui/material/Typography";
import FormDialog from "./FormDialog";

const FinalBlock = () => {
	return (
		<div style={{
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column',
			justifyContent: 'center',
			margin: '80px 0'
		}}>
			<img
				loading="lazy"
				style={{width: '80px', marginBottom: '10px'}}
				src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/icons/notion-app-icon-3d.png"/>
			<Typography variant="h4"
									style={{textAlign: 'center', fontWeight: 700, lineHeight: '2rem', marginBottom: '10px'}}>
				Try Notion today
			</Typography>
			<Typography variant="body1" style={{textAlign: 'center', marginBottom: '10px'}}>
				Get started for free. <br/>
				Add your whole team as your needs grow.
			</Typography>
			<FormDialog />
		</div>
	)
}

export default FinalBlock;