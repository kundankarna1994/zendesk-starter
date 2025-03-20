import { useContext, useState, useEffect } from 'react'
import { ClientContext } from '../contexts/ClientContext'

export const useClient = () => {
  const ctx = useContext(ClientContext)

  if (!ctx) {
    throw new Error('useClient must be used within a ClientProvider')
  }

  return ctx
}

export const useLocation = () => {
  const [location, setLocation] = useState<string | null>()
  const client = useClient()

  useEffect(() => {
    client.context().then((data: any) => {
      setLocation(data.location)
    })
  }, [setLocation, client])

  return location
}
