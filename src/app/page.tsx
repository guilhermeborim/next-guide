import Users from "@/components/users"
import Link from "next/link"

export default function Home() {

  return (
    <main>
      <h1>Next Guide</h1>
      <Link href={'/about'}>About</Link>
      <Users />
    </main>
  ) 
}