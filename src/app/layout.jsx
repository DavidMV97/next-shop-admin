import Footer from './components/footer'
import Header from './components/header'
import './globals.css'
import { Open_Sans } from 'next/font/google'


const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
})


export const metadata = {
  title: 'Servicios grupo éxito'
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} font-sans`}
    >
      <body className='font-sans'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
