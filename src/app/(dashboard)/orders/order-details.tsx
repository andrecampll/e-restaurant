import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Order 123123123</DialogTitle>
        <DialogDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          voluptatum, quidem quod, quos, eaque doloribus quibusdam quia
          voluptatem molestiae atque doloremque. Quae, quibusdam. Quisquam
          voluptates quibusdam voluptas, quos quae quia.
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pending
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Customer</TableCell>
              <TableCell className="flex justify-end">John Doe</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Phone number
              </TableCell>
              <TableCell className="flex justify-end">(12) 1234-5678</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                johndoe@gmail.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Ordered At
              </TableCell>
              <TableCell className="flex justify-end">15m ago</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Capuccino</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">$ 10.00</TableCell>
              <TableCell className="text-right">$ 10.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Macchiato</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">$ 10.00</TableCell>
              <TableCell className="text-right">$ 10.00</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right font-medium">$ 20.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
