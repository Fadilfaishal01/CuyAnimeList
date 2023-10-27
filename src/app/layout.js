import { Poppins } from 'next/font/google'
import './globals.css'
import NavigationBar from './components/NavigationBar'

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] })

export const metadata = {
  title: 'CuyAnimeList',
  description: 'Website Anime List',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavigationBar />
        {children}
      </body>
    </html>
  )
}
