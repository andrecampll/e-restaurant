import { Metadata } from 'next'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

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

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Your email</Label>
            <Input id="email" type="email" />
          </div>

          <Button className="w-full" type="submit">
            Access Dashboard
          </Button>
        </form>
      </div>
    </div>
  )
}
