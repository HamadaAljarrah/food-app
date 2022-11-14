import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Background } from '../layouts/background/Background'
import { Container } from '../layouts/container/Container'
import { ThemProvider } from '../context/theme-context'
import { Navbar } from '../layouts/navbar/Navbar'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemProvider>
            <Navbar/>
            <Component {...pageProps} />
        </ThemProvider>

    )
}
