type InputProps = {
  leftIcon?: boolean
  children: React.ReactNode
}

export default function Input({ leftIcon = false, children }: InputProps) {
  return (
    <>
      {children}

      {leftIcon && (
        <div>
          <h1>Icon</h1>
        </div>
      )}
    </>
  )
}
