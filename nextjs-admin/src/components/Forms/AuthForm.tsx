'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react';
// import * as z from zod;
import { z } from "zod";

import { useSearchParams } from 'next/navigation';

import {
    FormField,
    Form
} from '@/components/Common/Form'

import { Button } from '@/components/Common/UI/Button'

const formSchema = z.object({
    email : z.string().email({message : "Enter a valid email address"})
})

type UserFormValue = z.infer<typeof formSchema>;

export default function UserAuthForm() {
    const searchParam = useSearchParams();
    const callbackUrl = searchParam.get('callbackUrl');
    const [loading, setLoading] = useState(false);

    const defaultValues = {
        email: 'demo@gmail.com'
    };
    const form = useForm<UserFormValue>({
        resolver: zodResolver(formSchema),
        defaultValues
    })
    const onSubmit = async(data: UserFormValue) => {
        signIn('credentials', {
            email: data.email,
            callbackUrl: callbackUrl ?? '/dashboard'
        })
    }
    return (
      <>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <Button disabled={loading} className="ml-auto w-full" type="submit">
              Continue With Email
            </Button>
          </form>
        </Form>
        <div className="relative">
          <div>
            <span></span>
          </div>
          <div>
            <span>Or Continue With</span>
          </div>
        </div>
      </>
    );
}