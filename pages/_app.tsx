import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '@/layouts/Layout'
import ThemesProvider from '@/theme/ThemesProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemesProvider>
  )
}
