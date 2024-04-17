import React from 'react'

export default function ModalContent({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ backgroundColor: 'green' }}>
      {children}
      <div>
        <nav>
          <ul>
            <li>Jogos</li>
            <li>Downloads</li>
            <li>Gameplays</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
