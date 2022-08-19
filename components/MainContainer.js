import Head from "next/head";
import ResponsiveAppBar from "./AppBar";

const MainContainer = ({children, pageName}) => {
	return (
		<div style={{
			width: '1000px',
			margin: 'auto',
		}}>
			<Head>
				<title>{pageName}</title>
			</Head>
			<ResponsiveAppBar />
			<div>
				{children}
			</div>
		</div>
	);
};

export default MainContainer;