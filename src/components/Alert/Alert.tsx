import type { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

export interface AlertProps extends ComponentProps<'div'> {
  variant?: 'error' | 'success' | 'info' | 'warning'
  children: React.ReactNode
}

const alert = tv({
  base: 'flex py-2 px-4 rounded-lg',
  variants: {
    variant: {
      error: 'text-red-900 bg-red-100',
      success: 'text-green-900 bg-green-100',
      info: 'text-sky-900 bg-sky-100',
      warning: 'text-amber-900 bg-amber-100'
    }
  }
})

export const Alert = ({ variant = 'error', children, className, ...rest }: AlertProps) => {
  const classNames = alert({ variant, className })

  return (
    <div role="alert" className={classNames} {...rest}>
      {children}
    </div>
  )
}
