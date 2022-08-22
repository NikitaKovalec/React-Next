import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import {useState} from "react";
import {UserContext} from "../context"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props, {userObj}) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	const [user, setUser] = useState(userObj || null)

	return (
		<UserContext.Provider value={{user, setUser}}>
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
		</UserContext.Provider>
	);
}

export async function getServerSideProps(context) {
	const res = await fetch('http://localhost:3000/')
	const userObj = await res.json()
	if (!userObj) {
		return {
			props: null
		}
	}
	return {
		props: {userObj}
	}
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};