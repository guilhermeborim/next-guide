'use client'
import { ApiCep } from '@/hooks/apiCep'
import { useState } from 'react'

export const useCep = () => {
  const [cepUserInfo, setCepUserInfo] = useState<string | null>(null)
  const { cepUser, setCep } = ApiCep()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCepUserInfo(e.target.value)
  }

  const handleClick = () => {
    setCep(cepUserInfo)
  }

  return { cepUser, handleChange, handleClick }
}
