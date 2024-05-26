import { Plus } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { MovementTableRow } from './movement-table-row'

export function Movements() {
  return (
    <>
      <Helmet title="Movimentações" />

      <div className="flex flex-col gap-8">
        <div className="flex w-full justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Movimentações</h1>
          <Button>
            <Plus className="mr-4 h-4 w-4" />
            Nova movimentação
          </Button>
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
              {Array.from({ length: 10 }).map((_, i) => {
                return <MovementTableRow key={i} />
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
