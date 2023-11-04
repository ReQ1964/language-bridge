import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '@/layouts/Layout';
import { ThemeProvider } from 'styled-components';
import globalTheme from '@/styles/globalTheme';
import { ConfigProvider } from 'antd';
import antdTheme from '@/styles/antdTheme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ConfigProvider theme={antdTheme}>
			<ThemeProvider theme={globalTheme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</ConfigProvider>
	);
}
