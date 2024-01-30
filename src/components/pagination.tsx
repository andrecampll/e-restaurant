import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'

type PaginationProps = {
  pageIndex: number
  perPage: number
  totalCount: number
}

export function Pagination({
  pageIndex,
  perPage,
  totalCount,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Showing Total of {totalCount} results
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium ">
          Page {pageIndex + 1} of {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">First Page</span>
          </Button>
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous Page</span>
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next Page</span>
          </Button>

          <Button variant="outline" size="icon">
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Last Page</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
