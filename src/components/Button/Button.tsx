import type { ComponentProps } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { tv } from 'tailwind-variants'

type CommonProps = {
	size?: 'default' | 'small'
	variant?: 'default' | 'outline'
}

type ButtonProps =
	| (CommonProps & { as?: 'button' } & ComponentProps<'button'>)
	| (CommonProps & { as: 'link' } & LinkProps)

const button = tv({
	base: 'hover:bg-theme-primary-600 focus:bg-theme-primary-700 transition rounded-lg justify-center cursor-pointer flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-85 focus:outline-none',
	variants: {
		size: {
			default: 'h-12 px-4',
			small: 'h-9 px-2 text-xs'
		},
		variant: {
			default: 'bg-theme-primary-500  text-white',
			outline: 'text-theme-primary-600 border border-theme-primary-600 font-medium hover:text-white focus:text-white'
		}
	}
})

export function Button({
	children,
	as = 'button',
	className,
	size = 'default',
	variant = 'default',
	...rest
}: ButtonProps) {
	const classNames = button({ size, className, variant })

	return as === 'button' ? (
		<button {...(rest as ComponentProps<'button'>)} className={classNames}>
			{children}
		</button>
	) : (
		<Link {...(rest as LinkProps)} className={classNames}>
			{children}
		</Link>
	)
}
