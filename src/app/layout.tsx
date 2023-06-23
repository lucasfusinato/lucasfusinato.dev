import './globals.css'
import { Raleway } from 'next/font/google'
import { Metadata } from 'next'

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
    url: '/',
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
        <main>
          <div className="fixed left-0 top-0 w-screen h-screen bg-[#364156] text-white">
            <div className="flex items-center justify-center h-full">
                {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
