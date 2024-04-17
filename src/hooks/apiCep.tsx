'use client'
import { useEffect, useState } from 'react'

type CepProps = {
  localidade: string
  logradouro: string
}

export default function ApiCep(id: string) {
  const [cepUser, setCepUser] = useState<CepProps | null>(null)

  const fetchCepUser = async () => {
    const dataUser = await fetch(`https://viacep.com.br/ws/${id}/json/`)
    setCepUser(await dataUser.json())
  }
  useEffect(() => {
    fetchCepUser()
  }, [])
  return { cepUser }
}
