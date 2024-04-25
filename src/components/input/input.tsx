/*
  interface InputProps {
    placeholder: string
    type: 'text' | 'email' | 'password'
  }

  export function Input({ placeholder, type }: InputProps) {
    return <input type={type} placeholder={placeholder} />
  }
*/

import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return <input {...props} />
}
