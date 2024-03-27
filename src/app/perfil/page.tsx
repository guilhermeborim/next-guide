import Link from 'next/link'

export default function PerfilPage() {
  return (
    <main>
      <h1>Perfil</h1>
      <nav>
        <ul>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/settings'}>Settings</Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
