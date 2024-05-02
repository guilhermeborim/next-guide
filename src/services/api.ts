
interface Users {
  id: number,
  name: string
  username: string
  email: string
}

export const getTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return await response.json() as Users[]
}