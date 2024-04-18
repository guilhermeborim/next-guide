export default function CategoryList({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <nav>
        <ul>{children}</ul>
      </nav>
    </section>
  )
}
