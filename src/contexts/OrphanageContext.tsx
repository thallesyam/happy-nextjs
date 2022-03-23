import { createContext, ReactNode, useContext } from 'react'
import { useFetch } from '../hooks/useFetch'

type IOrphanages = {
  id: string
  name: string
  latitude: number
  longitude: number
}

type IOrphanageContext = {
  orphanages: IOrphanages[]
}

type IOrphanageProvider = {
  children: ReactNode
}

export const OrphanageContext = createContext({} as IOrphanageContext)

export function OrphanageProvider({ children }: IOrphanageProvider) {
  const { orphanages } = useFetch({ link: '/orphanages' })

  return (
    <OrphanageContext.Provider value={{ orphanages }}>
      {children}
    </OrphanageContext.Provider>
  )
}

export const useOrphanageContext = () => useContext(OrphanageContext)
