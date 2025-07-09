import type { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${props.className ?? ''} bg-theme-primary text-white text-center rounded-lg h-12 px-4 cursor-pointer`}
    >
      {props.children}
    </button>
  )
}
