interface PageHeaderProps {
  title: React.ReactNode
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-6 mt-8 lg:mt-16">
      <h2 className="text-zinc-800 text-2xl font-heading font-extrabold">
        {title}
      </h2>
      {description && <p className="text-zinc-500">{description}</p>}
    </div>
  )
}
