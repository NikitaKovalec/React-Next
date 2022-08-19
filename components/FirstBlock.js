import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormDialog from "./FormDialog";

const FirstBlock = ({h1, text, imageUrl}) => {
	return (
		<div style={{display: 'flex', margin:'150px 0'}}>
			<div style={{width:'50%', paddingRight: '20px'}}>
				<Typography variant="h2" style={{fontWeight: 700, lineHeight: '4rem', marginBottom:'20px'}}>
					{h1}
				</Typography>
				<Typography  variant="body1" style={{marginBottom:'20px', width: '70%'}}>
					{text}
				</Typography>
				<FormDialog />
			</div>
			<div style={{width:'50%'}}>
				<img
					src={imageUrl}
					loading="lazy"
					style={{width: '100%'}}
				/>
			</div>
		</div>
	);
};

export default FirstBlock;