import { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { SignInForm } from './sign-in-form'

export const metadata: Metadata = {
  title: 'Sign In',
}

export default function SignIn() {
  return (
    <div className="p-8">
      <Button variant="ghost" asChild className="absolute right-8 top-8">
        <Link href="/sign-up">New store? Create your account</Link>
      </Button>

      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Access Dashboard
          </h1>
          <p className="tex-sm text-muted-foreground">
            Follow up your sells and manage your products
          </p>
        </div>

        <SignInForm />
      </div>
    </div>
  )
}
