interface HeadingProps {
  children: React.ReactNode
}

export function Heading({ children }: HeadingProps) {
  return (
    <h2 className="text-zinc-800 text-2xl font-heading font-extrabold">
      {children}
    </h2>
  )
}
