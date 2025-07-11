import type { ComponentProps } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

type CommonProps = {
  size?: 'default' | 'small'
}

type ButtonProps =
  | (CommonProps & { as?: 'button' } & ComponentProps<'button'>)
  | (CommonProps & { as: 'link' } & LinkProps)

export function Button({
  children,
  as = 'button',
  className,
  size = 'default',
  ...props
}: ButtonProps) {
  const sizeDefault = 'h-12 leading-12 px-4'
  const sizeSmall = 'h-10 leading-10 px-3 text-sm'
  const common =
    'bg-theme-primary text-white rounded-lg justify-center cursor-pointer flex items-center gap-2'
  const style = `${className ?? ''}  ${size === 'default' ? sizeDefault : sizeSmall} ${common}`
  return as === 'button' ? (
    <button {...(props as ComponentProps<'button'>)} className={style}>
      {children}
    </button>
  ) : (
    <Link {...(props as LinkProps)} className={style}>
      {children}
    </Link>
  )
}
