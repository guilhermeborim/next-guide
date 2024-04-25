import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  onSuccess?: () => void
}

export function ButtonSuccess({ children, onSuccess, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      onClick={onSuccess}
      style={onSuccess ? { backgroundColor: 'green' } : {}}
    >
      {children}
    </button>
  )
}
