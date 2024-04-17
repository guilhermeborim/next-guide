export default function ModalTitle({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <h1 style={{ backgroundColor: 'blue', display: 'inline-flex' }}>
      {children}
    </h1>
  )
}
