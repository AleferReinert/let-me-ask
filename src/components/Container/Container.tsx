interface ContainerProps {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto px-2 max-w-[800px] box-content">{children}</div>
  )
}
