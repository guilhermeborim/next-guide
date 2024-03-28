/*
  Se o nome da pasta conter ... antes do nome do parâmetro, será possível acessar rotas como: /curso/nome-do-curso/aula/nome-da-aula. 
  Automaticamente uma array com os parâmetros será passado para a página.
*/

// cursos/[...slugs]/page.tsx
type PageParams = {
  params: {
    slugs: string[]
  }
}

export default function CursosPage({ params }: PageParams) {
  console.log(params) // me retorna todos os parametros que foram passado na url
  return (
    <main>
      <h1>Slug params Page</h1>
      {params.slugs.map((slug, index) => {
        return <div key={index}>{slug}</div>
      })}
    </main>
  )
}
