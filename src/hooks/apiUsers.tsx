'use client'
import { useEffect, useState } from 'react'

type UserProps = {
  name: string
  email: string
  id: string
}
export const ApiUsers = () => {
  const [data, setData] = useState<UserProps[] | null>([])
  const handleFetch = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    setData(await response.json())
  }
  useEffect(() => {
    handleFetch()
  }, [])
  return {
    data,
  }
}
