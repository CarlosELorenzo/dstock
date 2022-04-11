import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import '@fontsource/ubuntu';

import Navbar from '../components/Navbar/Navbar';

const MyApp = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<Component {...pageProps} />
			<GlobalStyle />
		</ThemeProvider>
	);
};

export default MyApp;
