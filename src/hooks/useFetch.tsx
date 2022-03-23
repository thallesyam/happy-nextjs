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

  async function fetchOrphanages() {
    const {
      data: { orphanages },
    } = await api.get(link)

    return orphanages?.data
  }

  useEffect(() => {
    fetchOrphanages().then((orphanages) => {
      setOrphanages([orphanages])
    })
  }, [])

  return {
    orphanages,
    fetchOrphanages,
  }
}
