import type { ComponentProps } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { tv } from 'tailwind-variants'

type CommonProps = {
  size?: 'default' | 'small'
}

type ButtonProps =
  | (CommonProps & { as?: 'button' } & ComponentProps<'button'>)
  | (CommonProps & { as: 'link' } & LinkProps)

const button = tv({
  base: 'bg-theme-primary text-white rounded-lg justify-center cursor-pointer flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-85',
  variants: {
    size: {
      default: 'h-12 px-4',
      small: 'h-10 px-3 text-sm'
    }
  }
})

export function Button({ children, as = 'button', className, size = 'default', ...props }: ButtonProps) {
  const classNames = button({ size, className })

  return as === 'button' ? (
    <button {...(props as ComponentProps<'button'>)} className={classNames}>
      {children}
    </button>
  ) : (
    <Link {...(props as LinkProps)} className={classNames}>
      {children}
    </Link>
  )
}
