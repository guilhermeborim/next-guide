import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] })

export const metadata: Metadata = {
  title: 'Next Guide',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
