import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../service/api'

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
  const [orphanages, setOrphanages] = useState<IOrphanages[]>([])

  async function fetchOrphanages() {
    const {
      data: { orphanages },
    } = await api.get('/orphanages')

    return orphanages.data
  }

  useEffect(() => {
    fetchOrphanages().then((response) => {
      setOrphanages([response])
    })
  }, [])

  return (
    <OrphanageContext.Provider value={{ orphanages }}>
      {children}
    </OrphanageContext.Provider>
  )
}

export const useOrphanageContext = () => useContext(OrphanageContext)
