
export default function Button({onClick}: {onClick: (number: number) => void}) {
  return (
    <button onClick={() => onClick(10)}>Click me</button>
  )
}