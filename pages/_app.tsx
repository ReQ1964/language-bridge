import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '@/layouts/Layout';
import { ThemeProvider } from 'styled-components';
import globalTheme from '@/styles/globalTheme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={globalTheme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}
