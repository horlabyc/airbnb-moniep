import MainLayout from './components/main-layout/MainLayout'
import Navbar from './components/navbar/Navbar'
import SecondaryNavbar from './components/secondary-navbar/Secondary-Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'

const font = Nunito({
  subsets: ["latin"]
})

export const metadata = {
  title: 'Airbnb Moniepoint',
  description: 'Airbnb clone'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <body className={`${font.className} no-scrollbar`}>
        <Navbar />
        <SecondaryNavbar />
        <MainLayout />
      </body>
    </html>
  )
}
