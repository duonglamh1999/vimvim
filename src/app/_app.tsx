// pages/_app.tsx

import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "../components/navbar";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#ff0000',
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>My Next.js App with MUI</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Navbar included here */}
        <Navbar />
        {/* Page content */}
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
