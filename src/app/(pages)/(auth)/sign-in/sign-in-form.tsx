'use client'

import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInFormData = z.object({
  email: z.string().email(),
})

type SignInFormData = z.infer<typeof signInFormData>

export function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormData>()

  const handleSignIn = useCallback((data: SignInFormData) => {
    try {
      console.log(data)

      toast.success('We just sent you an email with a magic link.', {
        action: {
          label: 'Resend email',
          onClick: () => handleSignIn(data),
        },
      })
    } catch {
      toast.error('Something went wrong. Please try again.')
    }
  }, [])

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Your email</Label>
        <Input id="email" type="email" {...register('email')} />
      </div>

      <Button disabled={isSubmitting} className="w-full" type="submit">
        Access Dashboard
      </Button>
    </form>
  )
}
