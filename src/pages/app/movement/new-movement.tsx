import { useState } from 'react'
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

  const handleSubmit = () => {
    createMovement({
      daysToHarvest,
      plant,
    })
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Novo Motorista</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label>Planta</Label>
          <Input value={plant} onChange={(e) => setPlant(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>Dias para a colheita</Label>
          <Input
            value={daysToHarvest}
            type="number"
            onChange={(e) => setDaysToHarvest(Number(e.target.value))}
          />
        </div>

        <Button className="w-full" type="submit">
          Enviar
        </Button>
      </form>
    </DialogContent>
  )
}
