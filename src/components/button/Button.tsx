/*
  import { ButtonHTMLAttributes } from 'react'

  interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
  - Essa interface faz com que tenhamos todas as propriedades do button nele sem ao menos ter que fazer nela agora no componente

  export function Button(props: ButtonProps) {
    return <button {...props} />
  }

*/

/*
  ( EXEMPLO FICTICIO )

  1 - Vamos supor que esse componente button será global, na qual vamos reutilizar ele em mais lugares.
  2 - Em toda a nossa aplicação, nós teremos apenas 2 buttons na qual será de "Salvar Dados" e "Cancelar Dados".
  3 - O button "Salvar Dados" terá o backgroundColor Green e o "Cancelar Dados" terá o backgroundColor Red.
  4 - "Salvar Dados" receberá um OnClick que dará a mensagem "Dados Salvos".
  5 - "Cancelar Dados" receberá um OnClick que dará a mensagem "Dados Cancelados". 
  ....
*/

type ButtonProps = {
  children: React.ReactNode
  onSuccess?: () => void
  onError?: () => void
  type: 'submit' | 'reset' | 'button'
}

export function Button({ children, onSuccess, onError, type }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onSuccess || onError}
      style={
        onSuccess ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
      }
    >
      {children}
    </button>
  )
}
