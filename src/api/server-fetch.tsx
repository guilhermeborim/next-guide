// colocando o async na funcao, ele torna um server components
// Server Components podem ser definidos como funções assíncronas,
// assim podemos fazer o fetch de dados no servidor e retornar o componente com os dados já disponíveis.
// Se você estiver criando uma aplicação Full-Stack, você pode também acessar o banco de dados diretamente no componente.
type Produto = {
  nome: string
  id: number
}
export default async function ApiServerFetch() {
  const response = await fetch('https://api.origamid.online/produtos')
  const data = (await response.json()) as Produto[]

  return (
    <main>
      <h1>Api</h1>
      {data.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </main>
  )
}
