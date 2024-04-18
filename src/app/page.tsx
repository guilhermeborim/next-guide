import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Next Guide - SOLID</h1>
      <div>
        <Link href={'/profile'}>Profile</Link>
      </div>
      <div>
        <Link href={'/props'}>Props</Link>
      </div>
      <div>
        <Link href={'/input'}>Input</Link>
      </div>
      <div>
        <Link href={'/cep'}>Cep</Link>
      </div>
      <div>
        <Link href={'/categorys'}>Categorys</Link>
      </div>
    </main>
  )
}
