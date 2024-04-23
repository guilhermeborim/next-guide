// https://jsonplaceholder.typicode.com/users
// 'use server'
import State from '@/functions/state'
import { UsersApi } from '@/functions/users'

/*
  Até aqui eu consigo usar server components.
  Porém se eu tiver que guardar isso em um estado, eu terei que usar client components.
  Vamos ver como fazer isso.
*/

/*
  Como cliente components nao pode ter função assincrona, vamos mudar ela de componente.
  Agora o fetch está em src/functions/users.tsx
  Porém, como estamos um server components nesse componente, nao podemos transformar o mesmo em cliente components.
  Pois lembrando, componente server aceita server e cliente dentro, componente client aceita apenas client.
*/
/*
  Colocamos agora um button com ao clicar aumentar o contador.
  Para fazer isso o componente teria que ser client components.
  Porém eu coloquei ele em outro arquivo fazendo com que apenas ele fosse clinte components.
  Ele está em src/functions/state.tsx
  Com isso conseguimos deixar nosso Header como server components.
  Isso faz com que se desativarmos o JavaScript do Google, o fetch nos usuários ainda continua sendo feito. Afetando apenas o botao do contador.
  Isso é bom pois praticamente todo o nosso componente está sendo renderizado no servidor, sendo mais rápido e melhor.
*/
export default function Header() {
  return (
    <header>
      <h2>Componente Header</h2>
      <nav>
        <ul>
          <UsersApi />
        </ul>
      </nav>
      <State />
    </header>
  )
}
