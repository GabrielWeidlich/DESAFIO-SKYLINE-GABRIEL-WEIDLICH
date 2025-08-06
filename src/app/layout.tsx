import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import OrientationGuard from '@/components/layout/OrientationGuard'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'D/SENSE - Skyline',
  description: 'Desafio de estágio da Skyline.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`${montserrat.variable} font-mont`}>
      <body className="bg-light-beige text-text-primary">
        <OrientationGuard>{children}</OrientationGuard>
      </body>
    </html>
  )
}