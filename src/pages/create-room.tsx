import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { Container } from '../components/Container/Container'
import { Header } from '../components/Header/Header'
import { Heading } from '../components/Heading/Heading'
import { dayjs } from '../lib/dayjs'

type GetRoomAPIResponse = Array<{
  id: string
  name: string
  questionsCount: number
  createdAt: string
}>

export function CreateRoomPage() {
  const { data } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`)
      const result: GetRoomAPIResponse = await response.json()
      return result
    }
  })

  return (
    <>
      <Header />
      <div className="mt-16 mb-8">
        <Container>
          <div className="mb-6">
            <Heading>Salas recentes</Heading>
            <p className="text-zinc-500">
              Acesso rápido para as salas criadas recentemente.
            </p>
          </div>
          <ul className="space-y-2">
            {data?.map((room) => (
              <li key={room.id}>
                <Link
                  to={`/room/${room.id}`}
                  title="Entrar"
                  className="p-4 bg-white text-zinc-800 flex items-center gap-4 rounded-lg transition group hover:bg-theme-primary"
                >
                  <h3 className="font-medium text-lg group-hover:text-white">
                    {room.name}
                  </h3>
                  <p className="text-xs text-white bg-theme-secondary font-medium rounded-[50px] py-1.5 px-3">
                    {room.questionsCount} perguntas
                  </p>
                  <p className="ml-auto text-sm transition group-hover:text-white">
                    {dayjs(room.createdAt).fromNow()}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </>
  )
}
