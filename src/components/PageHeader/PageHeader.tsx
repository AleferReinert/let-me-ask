interface PageHeaderProps {
	title: React.ReactNode
	description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
	return (
		<div className='mb-6 lg:mb-8'>
			<h2 className='text-zinc-800 text-2xl font-heading font-extrabold flex items-center gap-4'>{title}</h2>
			{description && <p className='text-zinc-500'>{description}</p>}
		</div>
	)
}
