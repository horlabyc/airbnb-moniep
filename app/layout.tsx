import Navbar from './components/navbar/Navbar'
import SecondaryNavbar from './components/secondary-navbar/Secondary-Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'

const font = Nunito({
  subsets: ["latin"]
})

export const metadata = {
  title: 'Airbnb Moniepoiint',
  description: 'Airbnb clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <SecondaryNavbar />
        {children}
      </body>
    </html>
  )
}
