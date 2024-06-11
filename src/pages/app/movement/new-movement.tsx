import { FormEvent, useState } from 'react'
import { toast } from 'sonner'
import { useContextSelector } from 'use-context-selector'

import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MovementsContext } from '@/contexts/MovementsContext'

export function NewMovement() {
  const [plant, setPlant] = useState('')
  const [daysToHarvest, setDaysToHarvest] = useState(0)

  const createMovement = useContextSelector(MovementsContext, (context) => {
    return context.createMovement
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    createMovement({
      daysToHarvest,
      plant,
    }).then(() => {
      toast.success('Movimentação criada com sucesso!')
      setDaysToHarvest(0)
      setPlant('')
    })
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Nova Movimentação</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label>Planta</Label>
          <Input
            value={plant}
            onChange={(e) => setPlant(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label>Dias para a colheita</Label>
          <Input
            value={daysToHarvest}
            type="number"
            onChange={(e) => setDaysToHarvest(Number(e.target.value))}
            required
            min={1}
          />
        </div>

        <Button className="w-full" type="submit">
          Enviar
        </Button>
      </form>
    </DialogContent>
  )
}
