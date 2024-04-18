'use client'
import { useCep } from '@/hooks/useCep'

const Cep = () => {
  const { cepUser, handleChange, handleClick } = useCep()

  return (
    <div>
      <h1>Cep</h1>
      {!cepUser && <h1>sem CEP</h1>}
      <h1>{cepUser?.localidade}</h1>
      <h1>{cepUser?.logradouro}</h1>
      <input onChange={handleChange} />
      <button onClick={handleClick}>Pegar cep</button>
    </div>
  )
}

export default Cep
