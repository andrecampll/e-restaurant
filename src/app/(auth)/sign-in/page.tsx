import { Metadata } from 'next'
import { z } from 'zod'

import { SignInForm } from './sigin-in-form'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export const metadata: Metadata = {
  title: 'Sign In',
}

export default function SignIn() {
  return (
    <div className="p-8">
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
