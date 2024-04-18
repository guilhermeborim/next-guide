'use client'

import { ApiUsers } from '@/hooks/apiUsers'

export default function CategoryItem() {
  const { data } = ApiUsers()
  return data?.map((item) => <li key={item.id}>{item.name}</li>)
}
