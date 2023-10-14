import Header from './components/header'
import { GlobalProvider, ThemeContextProvider } from './context/context-global'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Servicios grupo éxito'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <Header />
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  )
}
