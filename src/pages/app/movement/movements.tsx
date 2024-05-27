import { Plus } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useContextSelector } from 'use-context-selector'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { MovementsContext } from '@/contexts/MovementsContext'

import { MovementTableRow } from './movement-table-row'
import { NewMovement } from './new-movement'

export function Movements() {
  const movements = useContextSelector(MovementsContext, (context) => {
    return context.movements
  })

  return (
    <>
      <Helmet title="Movimentações" />

      <div className="flex flex-col gap-8">
        <div className="flex w-full justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Movimentações</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-4 h-4 w-4" />
                Nova movimentação
              </Button>
            </DialogTrigger>
            <NewMovement />
          </Dialog>
        </div>

        <div className="overflow-hidden rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px]">Plantio</TableHead>
                <TableHead>Usuário</TableHead>
                <TableHead className="w-[120px]">Plantio</TableHead>
                <TableHead className="w-[180px]">
                  Previsão de colheita
                </TableHead>
                <TableHead className="w-[120px]">Colheita</TableHead>
                <TableHead className="w-[31px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {movements.map((movement, i) => {
                return <MovementTableRow movement={movement} key={i} />
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
