import type { Metadata } from 'next'
import { Header } from './components/Header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next Temp',
  description: 'create next app By Yahya Parvar!'
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html
      lang={locale}
      dir={locale === 'ar' || locale == 'fa' ? 'rtl' : 'ltr'}
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body>
        <div className="bg-bg bg-fixed bg-cover">
          <div className="bg-gray-100 bg-opacity-50">
            <Header/>
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
