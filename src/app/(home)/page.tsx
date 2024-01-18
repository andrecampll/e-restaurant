import { Metadata } from 'next'

import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      e-restaurant
      <Button>Send</Button>
    </main>
  )
}
