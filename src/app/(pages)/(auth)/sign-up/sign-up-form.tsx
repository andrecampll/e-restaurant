'use client'

import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpFormData = z.infer<typeof signUpForm>

export function SignUpForm() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormData>()

  const handleSignUp = useCallback(
    (data: SignUpFormData) => {
      try {
        console.log(data)

        toast.success('Restaurant successfully created.', {
          action: {
            label: 'Login',
            onClick: () => router.push('/sign-in'),
          },
        })
      } catch {
        toast.error('Something went wrong. Please try again.')
      }
    },
    [router],
  )

  return (
    <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="restaurantName">Restaurant Name</Label>
        <Input
          id="restaurantName"
          type="text"
          {...register('restaurantName')}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="managerName">Your name</Label>
        <Input id="managerName" type="text" {...register('managerName')} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Your email</Label>
        <Input id="email" type="email" {...register('email')} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Your phone</Label>
        <Input id="phone" type="tel" {...register('phone')} />
      </div>

      <Button disabled={isSubmitting} className="w-full" type="submit">
        Finish Sign Up
      </Button>
      <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
        By submitting this form, you agree to our{' '}
        <a className="text-blue-500" href="#">
          Terms of Service
        </a>{' '}
        and{' '}
        <a className="text-blue-500" href="#">
          Privacy Policy
        </a>
      </p>
    </form>
  )
}
