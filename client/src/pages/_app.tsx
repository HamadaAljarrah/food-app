import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemProvider } from '../context/theme-context'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemProvider>
            <Component {...pageProps} />
        </ThemProvider>

    )
}
