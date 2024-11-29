import { Poppins } from 'next/font/google'
import { Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/globals.css'
import ThemeProvider from '@/context/ThemeProvider'

export const metadata: Metadata = {
  title: 'Adrian Apan',
  description:
    'Software engineer who enjoys crafting high-quality experiences through creative engineering.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
}

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin-ext'],
})

interface Props {
  children: React.ReactNode
}

const GA_TRACKING_ID = 'G-TS4BQBXKW3'

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </html>
  )
}
