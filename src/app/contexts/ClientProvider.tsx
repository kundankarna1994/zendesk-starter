import { useMemo, useState, useEffect, createContext, ReactNode } from 'react'
export const ClientContext = createContext<any>({})

export function ClientProvider({ children }: { children: ReactNode }) {
    const client = useMemo(() => window.ZAFClient.init(), [])
    const [appRegistered, setAppRegistered] = useState(false)

    useEffect(() => {
        client.on('app.registered', function () {
            setAppRegistered(true)
        })
    }, [client])

    if (!appRegistered) return null

    return <ClientContext.Provider value={client}>{children}</ClientContext.Provider>
}
