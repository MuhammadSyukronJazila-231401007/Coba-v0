import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
// Ganti import font dari Inter ke Plus Jakarta Sans
import { Plus_Jakarta_Sans } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Ganti definisi font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  // Tambahkan berbagai weight untuk fleksibilitas
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
})

export const metadata: Metadata = {
  title: "GIPI - Gabungan Industri Pariwisata Indonesia",
  description: "Gabungan Industri Pariwisata Indonesia (GIPI) - Indonesian Tourism Industry Association",
    generator: 'v0.dev'
}

// Ganti penggunaan font di element body
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={plusJakartaSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
