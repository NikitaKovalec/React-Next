import Typography from "@mui/material/Typography";

const ContentBlock = ({h3, text, picUrl, imageUrl}) => {
	return (
		<div style={{display: 'flex', marginTop: '80px'}}>
			<div style={{
				width: '75%',
				boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 15%), 0px 4px 5px 0px rgb(0 0 0 / 10%), 0px 1px 10px 0px rgb(0 0 0 / 8%)',
				borderRadius: '8px'
			}}>
				<img
					src={imageUrl}
					loading="lazy"
					style={{width: '100%'}}
				/>
			</div>
			<div style={{width: '50%', paddingLeft: '30px', margin: 'auto 0'}}>
				<div style={{width: '25%',
					marginBottom: '10px',
				}}>
					<img
						src={picUrl}
						loading="lazy"
						style={{width: '100%'}}
					/>
				</div>
				<Typography variant="h4" style={{fontWeight: 700, lineHeight: '2rem', marginBottom: '10px'}}>
					{h3}
				</Typography>
				<Typography variant="body1" style={{marginBottom: '10px', width: '70%'}}>
					{text}
				</Typography>

			</div>
		</div>
	);
};

export default ContentBlock;