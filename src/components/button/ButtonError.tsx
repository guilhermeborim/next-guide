import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  onError?: () => void
}

export function ButtonError({ children, onError, ...props }: ButtonProps) {
  return (
    <button
      onClick={onError}
      {...props}
      style={onError ? { backgroundColor: 'red' } : {}}
    >
      {children}
    </button>
  )
}
