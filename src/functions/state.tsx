'use client'

import { useState } from 'react'

export default function State() {
  const [count, setCount] = useState(0)

  function handleClickCount() {
    setCount((prev) => prev + 1)
  }
  return (
    <div>
      <button onClick={handleClickCount}>Clicar</button>
      <div>{count}</div>
    </div>
  )
}
