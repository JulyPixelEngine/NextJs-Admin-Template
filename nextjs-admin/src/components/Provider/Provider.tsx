"use client"

import { SessionProvider, SessionProviderProps } from "next-auth/react"
import React from "react"
// export default function Provider({ children } : {children: React.ReactNode}) {
//     return <SessionProvider>{children}</SessionProvider>
// }

export default function Provider({
    session,
    children
}: {
    session: SessionProviderProps['session'];
    children: React.ReactNode
}) {
    return (
        <>
            <SessionProvider>{children}</SessionProvider>
        </>
    )
}