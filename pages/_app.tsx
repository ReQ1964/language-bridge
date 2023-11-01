import '@/styles/globals.scss';
import '@/styles/variables.scss';
import type { AppProps } from 'next/app';
import Layout from '@/layouts/Layout';
import { ConfigProvider } from 'antd';
import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
	components: {
		Button: {
			colorPrimaryHover: '#765612',
		},
	},
};

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ConfigProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ConfigProvider>
	);
}
