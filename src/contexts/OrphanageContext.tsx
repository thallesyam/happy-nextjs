import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

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

const orphanage = {
  id: '1',
  name: 'Orf. Esperança',
  latitude: -23.6821604,
  longitude: -46.8754915,
}

const OrphanageContext = createContext({} as IOrphanageContext)

export function OrphanageProvider({ children }: IOrphanageProvider) {
  const [orphanages, setOrphanages] = useState<IOrphanages[]>([])

  useEffect(() => {
    setOrphanages([orphanage])
  }, [])

  return (
    <OrphanageContext.Provider value={{ orphanages }}>
      {children}
    </OrphanageContext.Provider>
  )
}

export const useOrphanageContext = () => useContext(OrphanageContext)
