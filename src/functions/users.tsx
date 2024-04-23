type UserProps = {
  id: number
  name: string
}

export const UsersApi = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users')
  const user = (await data.json()) as UserProps[]

  return (
    <>
      {user.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </>
  )
}
