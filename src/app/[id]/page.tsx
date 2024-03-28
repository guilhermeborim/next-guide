/*
  Uma pasta com o nome entre colchetes [id], indica que a rota é dinâmica. 
  id será o nome do parâmetro que será passado para a página. O acesso ao parâmetro fica dentro da propriedade params.
*/

type Produto = {
  id: number
  nome: string
  descricao: string
  preco: number
}
type PageParams = {
  params: {
    id: string
  }
}
export default async function IdPage({ params }: PageParams) {
  console.log(params) // me mostra o parametro que foi passado na url
  const response = await fetch(
    `https://api.origamid.online/produtos/${params.id}`,
  )
  const data = (await response.json()) as Produto
  return (
    <main>
      <h1>Id Page</h1>
      <h2>Produto: {params.id}</h2>
      <h2>{data.nome}</h2>
      <h2>R$ {data.preco}</h2>
      <h2>{data.descricao}</h2>
    </main>
  )
}
