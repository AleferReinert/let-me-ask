import type { ComponentProps } from 'react'

interface ContainerProps extends ComponentProps<'div'> {
  children: React.ReactNode
}

export function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <div {...rest} className={`${className ?? ''} mx-auto px-4 max-w-[1000px] box-content`}>
      {children}
    </div>
  )
}
