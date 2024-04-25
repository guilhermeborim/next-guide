import { Input } from '@/components/input/input'

export default function InputPage() {
  return (
    <>
      <div>
        <Input
          placeholder="Digite seu nome"
          type="email"
          name="nome"
          id="nome"
        />
      </div>
      <div>
        <Input
          placeholder="Digite seu email"
          type="password"
          name="senha"
          id="senha"
        />
      </div>
    </>
  )
}
