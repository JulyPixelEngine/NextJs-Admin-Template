"use client"

import React, { useState, ReactNode} from "react"
import SideBar from "@/components/Sidebar"
import Header from "@/components/Header"


export default function DefaultLayout({
    children
} : {
    children: React.ReactNode
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
      <>
        <div className="flex h-screen overflow-hidden">
            <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>
                <div>
                    {children}
                </div>
            </main>
          </div>
        </div>
      </>
    );
}