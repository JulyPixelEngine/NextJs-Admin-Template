"use client"

import React, { useState, ReactNode} from "react"
import SideBar from "@/components/Sidebar"
import Header from "@/components/Header"


export default function DefaultLayout({
    children
} : {
    children: React.ReactNode
}) {
    return (
        <>
        <Header/>
        </>
    )
}