import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Next Guide - Router</h1>
      <nav>
        <ul>
          <li>
            <Link href={'/perfil'}>Perfil</Link>
          </li>
          <li>
            <Link href={'/settings'}>Settings</Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
