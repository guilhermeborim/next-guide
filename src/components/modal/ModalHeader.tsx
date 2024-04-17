import React from 'react'

export default function ModalHeader({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <header style={{ backgroundColor: 'red' }}>
      {children}
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
        </ul>
      </nav>
    </header>
  )
}
