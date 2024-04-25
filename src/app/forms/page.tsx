'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

type UserProps = {
  id: number
  name: string
}
type ErrorsProps = {
  name: string
  email: string
}
export default function FormPage() {
  const [users, setUsers] = useState<UserProps[]>([])
  const formUserDetailsSchema = z.object({
    name: z.string().nonempty('O campo nome é obrigátorio!'),
    email: z.string().email('O campo email é obrigátorio!'),
  })
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ErrorsProps>({
    resolver: zodResolver(formUserDetailsSchema),
  })

  async function onSubmitFormUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = (await response.json()) as UserProps[]
      setUsers(users)
    } catch {
      console.log('error')
    }
  }
  return (
    <div>
      <h1>Form - React Hook Form + Zod</h1>
      <div>
        <form
          onSubmit={handleSubmit(onSubmitFormUser)}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2 ">
            <label htmlFor="name">Name</label>
            <input
              {...register('name')}
              type="text"
              placeholder="Insira seu nome"
              className="border border-red-500 text-white bg-black p-2"
            />
            {errors.name && (
              <h1 className="text-red-500 text-xs font-semibold">
                {errors.name?.message}
              </h1>
            )}
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="email">Email</label>
            <input
              {...register('email')}
              type="email"
              placeholder="Insira seu email"
              className="border border-red-500 text-white bg-black p-2"
            />
            {errors.email && (
              <h1 className="text-red-500 text-xs font-semibold">
                {errors.email?.message}
              </h1>
            )}
          </div>
          <button
            type="submit"
            className="bg-black text-white disabled:bg-black/30 py-2"
            disabled={isSubmitting}
          >
            Entrar na conta
          </button>
        </form>
        <div>
          {isSubmitting ? (
            <h1>Carregando...</h1>
          ) : (
            users.map((user) => <li key={user.id}>{user.name}</li>)
          )}
        </div>
      </div>
    </div>
  )
}
