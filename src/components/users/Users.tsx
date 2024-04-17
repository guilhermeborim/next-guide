'use client'
import { ApiUsers } from '@/hooks/apiUsers'
export default function Users() {
  const { data } = ApiUsers()

  return (
    <div>
      <h1>Users</h1>
      {data?.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <h1>{item.email}</h1>
        </div>
      ))}
    </div>
  )
}
