'use client'
import { Button } from '@/components/button/Button'
import { ButtonError } from '@/components/button/ButtonError'
import { ButtonSuccess } from '@/components/button/ButtonSuccess'

export default function ButtonPage() {
  return (
    <>
      <h1>Primeira maneira a ser feita do Exemplo</h1>
      <div>
        <Button onSuccess={() => console.log('Dados Salvos')} type="reset">
          Salvar Dados
        </Button>
      </div>
      <div>
        <Button onError={() => console.log('Dados Cancelados')} type="submit">
          Cancelar Dados
        </Button>
      </div>
      <h1>Segunda maneira a ser feita do Exemplo</h1>
      <div>
        <ButtonSuccess
          onSuccess={() => console.log('Dados Salvos')}
          type="submit"
        >
          Salvar Dados
        </ButtonSuccess>
      </div>
      <div>
        <ButtonError
          onError={() => console.log('Dados Cancelados')}
          type="reset"
        >
          Cancelar Dados
        </ButtonError>
      </div>
    </>
  )
}
