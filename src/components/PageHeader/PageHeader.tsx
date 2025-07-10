interface PageHeaderProps {
  title: React.ReactNode
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mt-8 mb-6 lg:mt-14 lg:mb-10">
      <h2 className="text-zinc-800 text-2xl font-heading font-extrabold">
        {title}
      </h2>
      {description && <p className="text-zinc-500">{description}</p>}
    </div>
  )
}
