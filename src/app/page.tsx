'use client'
import { useFormState, useFormStatus } from 'react-dom'

export default function Home() {
  /**
   * @param prevState - Estado anterior
   * @param formData Informacoes do formulario
   * @returns Retorna um texto com o nome do usuario
   */

  const submitForm = async (prevState, formData) => {
    await new Promise((resolve) => setTimeout(resolve, 2500))
    const name = formData.get('name')
    if (name.length < 4) {
      return {
        text: 'Digite um nome maior',
      }
    }
    return {
      text: `Bem vindo ${name}`,
    }
  }

  // state: Me retorna o estado atual do formulario.
  // formAction: Seria o nome da action que vai ser usada no formulario.
  // Os parametros da function useFormState(): O primeiro seria o nome da function que vai ocorrer, e o segundo seria o valor do estado inicial.

  const [state, formAction] = useFormState(submitForm, null)
  return (
    <main>
      <h1 className="text-[32px] font-semibold p-10">Next Guide - Forms</h1>

      <form action={formAction}>
        <div className="flex flex-col gap-5">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            className="border border-black font-normal text-sm"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            className="border border-black font-normal text-sm"
          />
          {/* Button da funcion SubmitButton() */}
          <SubmitButton />
        </div>
        {state && <h2>{state.text}</h2>}
      </form>
    </main>
  )
}

// Seria mais interessente usar ele fora do componente pai, como esta agora.
// Para um uso mais correto, podemos ainda colocar ele em outro arquivo separadamente.
function SubmitButton() {
  // useFormStatus: Ele nos da o status atual do fomulario.
  // Abaixo estamos vendo se o formulario esta pending: Se esta sendo enviado.
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      // Se estiver pending, ele desativa o botao.
      disabled={pending}
      className="bg-red-500 disabled:bg-red-200 disabled:text-green-500"
    >
      {pending ? 'Enviando...' : 'Enviar'}
    </button>
  )
}
