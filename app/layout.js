import './globals.css'

export const metadata = {
  title: 'PentAi - AI Financial Platform',
  description: 'Revolutionizing financial management with AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
