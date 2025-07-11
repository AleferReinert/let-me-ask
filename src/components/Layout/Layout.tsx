import { Container } from '../Container/Container'
import { Header } from '../Header/Header'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Container className="mt-8 lg:mt-14">{children}</Container>
    </>
  )
}
