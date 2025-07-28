import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Roboto from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com"
          />
       
        <link 
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Instrument+Serif:ital@0;1&display=swap" 
          rel="stylesheet"
          />

        {/* Preload Apple Garamond TTFs */}
        <link
          rel="preload"
          as="font"
          href="/fonts/apple_garamond/AppleGaramond-Light.ttf"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/apple_garamond/AppleGaramond-LightItalic.ttf"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
