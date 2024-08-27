'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react';
import * as z from zod;
import { useSearchParams } from 'next/navigation';

const formSchema = z.object({
    email : z.string().email({message : "Enter a valid email address"})
})

type UserFormValue = z.infer<typeof formSchema>;

export default function UserAuthForm() {
    const searchParam = useSearchParams();
    const callbackUrl = searchParam.get('callbackUrl');

    const dafaultEmail = {
        email: 'demo@gmail.com'
    };
    const onSubmit = async(data: UserFormValue) => {
        signIn('credentials', {
            email: data.email,
            callbackUrl: callbackUrl ?? '/dashboard'
        })
    }
    return (
        <>
        </>
    )
}