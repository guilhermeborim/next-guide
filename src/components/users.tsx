'use client'
import { getTodos } from "@/services/api"
import { useQuery } from "@tanstack/react-query"
export default function Users() {
  const {data} = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos
  })
  return (
    <>
    {data?.map((user) => (
        <div key={user.id}>
          <h1>Name: {user.name}</h1>
          <h2>Email: {user.email}</h2>
          <h3>Username: {user.username}</h3>
        </div>
      ))}
    </>
  )
}