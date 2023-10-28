import '@/styles/globals.scss';
import '@/styles/variables.scss';
import type { AppProps } from 'next/app';
import Layout from '@/layouts/Layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
