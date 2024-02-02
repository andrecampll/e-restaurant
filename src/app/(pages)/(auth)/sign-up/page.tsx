import { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { SignUpForm } from './sign-up-form'

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function SignUp() {
  return (
    <div className="p-8">
      <Button variant="ghost" asChild className="absolute right-8 top-8">
        <Link href="/sign-in">Already have an account? Sign in</Link>
      </Button>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create your account
          </h1>
          <p className="tex-sm text-muted-foreground">
            Become a partner and start selling
          </p>
        </div>

        <SignUpForm />
      </div>
    </div>
  )
}
