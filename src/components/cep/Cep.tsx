import ApiCep from '@/hooks/apiCep'

export default function Cep() {
  const { cepUser } = ApiCep('12916560')
  return (
    <div>
      {!cepUser && <h1>sem CEP</h1>}
      <h1>{cepUser?.localidade}</h1>
      <h1>{cepUser?.logradouro}</h1>
    </div>
  )
}
