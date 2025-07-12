import { Container } from '../Container/Container'
import { Header } from '../Header/Header'

interface LayoutProps {
	children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			<Container className='pt-8 lg:pt-14 pb-8'>{children}</Container>
		</>
	)
}
