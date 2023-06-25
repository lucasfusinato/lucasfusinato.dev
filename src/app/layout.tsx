import './globals.css'
import { Raleway } from 'next/font/google'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import NavBar from '@/components/NavBar'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lucas Fusinato - Software Engineer',
  description: 'Software Engineer with strong experience developing web software applications',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Lucas Fusinato - Software Engineer',
    description: 'Software Engineer with strong experience developing web software applications',
    url: 'https://lucasfusinato.dev',
    type: 'website',
    images: 'https://avatars.githubusercontent.com/u/31139370?v=4'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={raleway.className}>
        <div className="fixed flex flex-col left-0 top-0 w-screen h-screen bg-[#364156] text-white overflow-y-auto">
          <NavBar />
          <main className="flex-1">
            <div className="flex items-start md:items-center justify-center h-full p-5">
                {children}
            </div>
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
