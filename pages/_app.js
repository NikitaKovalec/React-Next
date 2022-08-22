import * as React from 'react';
import Head from 'next/head';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider} from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import {useState} from "react";
import {UserContext} from "../context"
import App from "next/app";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp({Component, emotionCache = clientSideEmotionCache, pageProps, userObj}) {
  const [user, setUser] = useState(userObj || null)
  console.log(userObj)
  return (
    <UserContext.Provider value={{user, setUser}}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline/>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </UserContext.Provider>
  );
}

// MyApp.getInitialProps = async (context) => {
//   const appProps = await App.getInitialProps(context)
//   const user = {...appProps}
//
//   return {userObj: user}
// }
