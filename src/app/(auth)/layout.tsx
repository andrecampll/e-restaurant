import { Coffee } from 'lucide-react'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <Coffee className="h-5 w-5" />
          <span className="font-semibold">Coffelivery</span>
        </div>
        <footer className="text-sm">
          Partner dashboard - &copy; Coffeelivery - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </main>
  )
}
