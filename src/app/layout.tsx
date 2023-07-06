import Wrapper from './components/shared/Wrapper'
import './globals.css'
import Header from './layout/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head/>
      <body>
        {/* {Header} */}
        <Header/>
        {children}</body>
    </html>
  )
}
