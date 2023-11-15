import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '@/layouts/Layout'
import ThemesProvider from '@/theme/ThemesProvider'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemesProvider>
    </QueryClientProvider>
  )
}
