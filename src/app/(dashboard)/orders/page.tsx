import { ArrowRight, Search, X } from 'lucide-react'
import { Metadata } from 'next'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export const metadata: Metadata = {
  title: 'Orders',
}

export default function Orders() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter">Orders</h1>
      </div>
      <div className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filters</span>
          <Input placeholder="Customer name" className="h-8 w-[320px]" />
        </form>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identifier</TableHead>
                <TableHead className="w-[180px]">Ordered at</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead className="w-[140px]">Total</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>
                  <Button variant="outline" size="xs">
                    <Search className="h-3 w-3" />
                    <span className="sr-only">Order details</span>
                  </Button>
                </TableCell>
                <TableCell className="font-mono text-xs font-medium">
                  1278939812738981923789123
                </TableCell>
                <TableCell className="text-muted-foreground">15m ago</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span className="font-medium text-muted-foreground">
                      Pending
                    </span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">John Doe</TableCell>
                <TableCell className="font-medium">$ 120.00</TableCell>
                <TableCell>
                  <Button variant="outline" size="xs">
                    <ArrowRight className="mr-2 h-3 w-3 text-green-500 dark:text-green-400" />
                    <span className="text-green-500 dark:text-green-400">
                      Approve
                    </span>
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="xs">
                    <X className="mr-2 h-3 w-3 text-rose-500 dark:text-rose-400" />
                    <span className="text-rose-500 dark:text-rose-400">
                      Cancel
                    </span>
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
