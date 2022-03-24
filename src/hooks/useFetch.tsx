import { useEffect, useState } from 'react'
import { api } from '../service/api'

type IOrphanages = {
  id: string
  name: string
  latitude: number
  longitude: number
}

type IUseFetch = {
  link: string
}

export function useFetch({ link }: IUseFetch) {
  const [orphanages, setOrphanages] = useState<IOrphanages[]>([])

  useEffect(() => {
    async function fetchOrphanages() {
      const response = await api.get(link)
      const data = response?.data
      const orphanages = data?.orphanages

      setOrphanages([orphanages?.data])
    }

    fetchOrphanages()
  }, [])

  return {
    orphanages,
  }
}
