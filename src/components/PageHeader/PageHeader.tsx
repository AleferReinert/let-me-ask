import { VscArrowLeft, VscRecord } from 'react-icons/vsc'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../Button/Button'

interface PageHeaderProps {
  title: React.ReactNode
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  const isHome = useLocation().pathname === '/'

  return (
    <div className="mt-8 mb-6 lg:mt-14 lg:mb-10">
      <div className="flex justify-between items-center mb-2">
        {!isHome && (
          <Link
            to="/"
            className="focus:outline-none text-zinc-500 text-sm flex gap-1 hover:underline"
          >
            <VscArrowLeft className="size-4 transition" aria-hidden />
            Voltar ao início
          </Link>
        )}
        <Button
          as="link"
          size="small"
          to="/"
          className="focus:outline-none ml-auto"
        >
          <VscRecord className="size-4 transition" aria-hidden />
          Gravar áudio
        </Button>
      </div>
      <h2 className="text-zinc-800 text-2xl font-heading font-extrabold">
        {title}
      </h2>
      {description && <p className="text-zinc-500">{description}</p>}
    </div>
  )
}
