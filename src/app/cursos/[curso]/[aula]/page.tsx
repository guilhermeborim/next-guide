/* eslint-disable prettier/prettier */
// app/cursos/[curso]/[aula]/page.tsx
import { getAula } from '@/api/cursos';
import Link from 'next/link';

export default async function AulaPage({
  params,
}: {
  params: { curso: string; aula: string }
}) {
  const aula = await getAula(params.curso, params.aula)
  return (
    <main>
      <Link href={`/cursos/${params.curso}`}>{params.curso}</Link>
      <h1>{aula.nome}</h1>
      <p>{aula.descricao}</p>
      <p>Tempo: {aula.tempo}</p>
    </main>
  )
}
