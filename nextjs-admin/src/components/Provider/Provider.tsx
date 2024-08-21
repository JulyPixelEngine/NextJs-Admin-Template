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
            <SessionProvider session={session}>{children}</SessionProvider>
        </>
    )
}

// {children} 은 부모 컴포넌트가 감싸고 있는 자식 컴포넌트 동적으로 랜더링하는 데 사용
// {children} 은 Providers 컴포넌트가 감싸고 있는 실제 페이지 콘텐츠나 컴포넌트 의미하며, 이를 통해 전역 설정할 수 있음