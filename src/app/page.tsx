import ProfileCard from '@/components/ProfileCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lucas Fusinato - Home',
}

export default function Home() {
  return (
    <ProfileCard />
  )
}
