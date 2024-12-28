import './globals.css'

export const metadata = {
  title: 'CoreSilicon Consulting',
  description: 'Advanced Semiconductor Consulting Solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
