import { MoreHorizontal } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { TableCell, TableRow } from '@/components/ui/table'
import { Movement } from '@/contexts/MovementsContext'
import { formatDate } from '@/utils/formtDate'

interface MovementTableRowProps {
  movement: Movement
}

export function MovementTableRow({ movement }: MovementTableRowProps) {
  const createdAt = new Date(movement.createdAt)
  const formattedCreatedAt = formatDate(createdAt)

  const harvestDate = createdAt
  harvestDate.setDate(createdAt.getDate() + movement.daysToHarvest)
  const formattedHarvestDate = formatDate(harvestDate)

  const harvestedAt = movement.harvestedAt
    ? new Date(movement.harvestedAt)
    : null
  const formattedHarvestedAt = harvestedAt ? formatDate(harvestedAt) : '-'

  return (
    <TableRow>
      <TableCell className="font-medium">{movement.plant}</TableCell>
      <TableCell className="font-medium">{movement.user.name}</TableCell>
      <TableCell className="text-muted-foreground">
        {formattedCreatedAt}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {formattedHarvestDate}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {formattedHarvestedAt}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" side="left">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText('id')}
            >
              Copiar o ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => {}}>Editar</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                toast.success(
                  `Usuário deletado com sucesso, CLIQUE PARA CANCELAR`,
                )
              }
              className="focus:bg-red-100 focus:text-red-900"
            >
              Deletar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  )
}
