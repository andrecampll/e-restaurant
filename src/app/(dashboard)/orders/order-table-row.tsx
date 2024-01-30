import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderDetails } from './order-details'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Order details</span>
            </Button>
          </DialogTrigger>

          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        1278939812738981923789123
      </TableCell>
      <TableCell className="text-muted-foreground">15m ago</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pending</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">John Doe</TableCell>
      <TableCell className="font-medium">$ 120.00</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="mr-2 h-3 w-3 text-green-500 dark:text-green-400" />
          <span className="text-green-500 dark:text-green-400">Approve</span>
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-2 h-3 w-3 text-rose-500 dark:text-rose-400" />
          <span className="text-rose-500 dark:text-rose-400">Cancel</span>
        </Button>
      </TableCell>
    </TableRow>
  )
}
