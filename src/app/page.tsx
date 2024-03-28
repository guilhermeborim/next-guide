import ApiClientFetch from '@/api/client-fetch'
import ApiServerFetch from '@/api/server-fetch'

/*
  Podemos notar uma grande diferença entre o fetch no servidor e o fetch no cliente.
  No servidor a resposta é muito mais rápida pois fica guardado em cache.
  No cliente a resposta acaba demorando um pouco mais.
  Observando no console do navegador na aba Network podemos notar
  Servidor - 40ms de resposta
  Cliente - 170ms de resposta
*/

export default function Home() {
  return (
    <main>
      <h1>Next Guide - Fetch</h1>
      <div>
        <h2>Server fetch</h2>
        <ApiServerFetch />
      </div>
      <div>
        <h2>Client fetch</h2>
        <ApiClientFetch />
      </div>
    </main>
  )
}
