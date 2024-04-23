/*
  A Page sempre é a melhor opção deixar ele como server components.
  - Cliente components nao pode ter dentro dele um server components.
  - Server components pode ter dentro dele um cliente components.
*/
// 'use server'

import Header from '@/components/Header/Header'

export default function Home() {
  return (
    <main>
      <h1>Next Guide - Server e Client Components</h1>
      <Header />
    </main>
  )
}
