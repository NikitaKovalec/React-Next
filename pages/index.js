import MainContainer from "../components/MainContainer";
import FirstBlock from "../components/FirstBlock";
import ContentBlock from "../components/ContentBlock";
import ContentBlock2 from "../components/ContentBlock2";
import FinalBlock from "../components/FinalBlock";

const Index = () => {
	return (
		<MainContainer pageName={'Главная'}>
			<FirstBlock h1={'One workspace. Every team.'}
									text={'We’re more than a doc. Or a table. Customize Notion to work the way you do.'}
									imageUrl={'https://www.notion.so/cdn-cgi/image/format=auto,width=640,quality=100/front-static/pages/product/home-page-hero-refreshed-v3.png'}
			/>
			<ContentBlock h3={'Never ask “What’s the context?” again'}
										text={'Connect your teams, projects, and docs in Notion — so you can bust silos and move as one.'}
										imageUrl={'https://images.ctfassets.net/spoqsaf9291f/5pdXjUhryVmySMEpOE6odc/e54ab91a48eccde2d9a47dcaaec49db8/Screen_Shot_2021-11-03_at_6.48.30_PM.png'}
										picUrl={'https://www.notion.so/cdn-cgi/image/format=auto,width=128,quality=100/front-static/pages/product/spot/spot-team-up.png'}
			/>
			<ContentBlock2 h3={'Team up without the chaos'}
										text={'Stale wikis arent helpful. Neither are floating docs. In Notion, your daily work and knowledge live side by side — so you never lose context.'}
										imageUrl={'https://images.ctfassets.net/spoqsaf9291f/6Ox9OB5kmdRjN06gBNv01i/6935097bb97dee4980dd5d6967f75939/Desktop_app_version.png'}
										picUrl={'https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/product/spot/spot-context.png'}
			/>
			<FinalBlock />
		</MainContainer>
	)
}

export default Index

export const getServerSideProps = async () => ({ props: {} });