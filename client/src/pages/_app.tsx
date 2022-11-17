import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemProvider } from '../context/theme-context'
import { Navbar } from '../layouts/navbar/Navbar'
import { MenuProvider } from '../context/menu-context'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemProvider>
            <MenuProvider>
                <Navbar />
                <Component {...pageProps} />
            </MenuProvider>
        </ThemProvider>

    )
}
