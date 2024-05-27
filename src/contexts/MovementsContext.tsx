import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

import { api } from '../lib/axios'

export interface User {
  id: string
  name: string
}

export interface Movement {
  id?: string
  user: User
  plant: string
  daysToHarvest: number
  createdAt: string
  harvestedAt?: string
}

interface CreateMovementInput {
  plant: string
  daysToHarvest: number
}

interface MovementContextType {
  movements: Movement[]
  fetchMovements: (query?: string) => Promise<void>
  createMovement: (data: CreateMovementInput) => Promise<void>
}

interface MovementsProviderProps {
  children: ReactNode
}

export const MovementsContext = createContext({} as MovementContextType)

export function MovementsProvider({ children }: MovementsProviderProps) {
  const [movements, setMovements] = useState<Movement[]>([])

  const fetchMovements = useCallback(async (query?: string) => {
    const response = await api.get('movements', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setMovements(response.data)
  }, [])

  const createMovement = useCallback(async (data: CreateMovementInput) => {
    const { daysToHarvest, plant } = data

    const body = {
      user: {
        id: '1',
        name: 'Rodolfo Souza Menezeas',
      },
      plant,
      daysToHarvest,
      createdAt: new Date(),
    }
    const response = await api.post('movements', body)

    setMovements((state) => [response.data, ...state])
  }, [])

  useEffect(() => {
    fetchMovements()
  }, [fetchMovements])

  return (
    <MovementsContext.Provider
      value={{
        movements,
        fetchMovements,
        createMovement,
      }}
    >
      {children}
    </MovementsContext.Provider>
  )
}
