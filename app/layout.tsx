import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>HelmGuard | Real-time industrial safety</title>
        <meta
          name="description"
          content="Real-time safety monitoring for industrial workers. Advanced IoT protection for mining, construction, and hazardous environments."
        />
      </head>
      <body className={`font-sans antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

import { ClientLayout } from "./client-layout"

export const metadata = {
  generator: "v0.app",
}
