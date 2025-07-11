import { Link } from 'react-router-dom'
import { Container } from '../Container/Container'

export function Header() {
  return (
    <header className="py-4 border-b border-neutral-200 bg-white">
      <Container>
        <h1>
          <Link to="/" className="focus:outline-none">
            <img alt="Let Me Ask" src="/logo.svg" width="100.26" height="45" />
          </Link>
        </h1>
      </Container>
    </header>
  )
}
