import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="py-4 border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-[1116px] px-4 box-content flex justify-between">
        <h1>
          <Link to="/">
            <img alt="Let Me Ask" src="/logo.svg" width="100.26" height="45" />
          </Link>
        </h1>
      </div>
    </header>
  )
}
