import Link from 'next/link'

export default function SettingsPage() {
  return (
    <main>
      <h1>Settings</h1>
      <nav>
        <ul>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/perfil'}>Perfil</Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
