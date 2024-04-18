'use client'
import { useEffect, useState } from 'react'

type CepProps = {
  localidade: string
  logradouro: string
}

export const ApiCep = () => {
  const [cepUser, setCepUser] = useState<CepProps | null>(null)
  const [cep, setCep] = useState<string | null>(null)

  useEffect(() => {
    const fetchCepInfo = async () => {
      if (!cep) return

      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        if (!response.ok) {
          throw new Error('Erro ao buscar o CEP')
        }
        const data = await response.json()
        setCepUser(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchCepInfo()
  }, [cep])
  return { cepUser, setCep }
}
