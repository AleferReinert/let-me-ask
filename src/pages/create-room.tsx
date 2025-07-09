import { Container } from '../components/Container/Container'
import { Header } from '../components/Header/Header'
import { Heading } from '../components/Heading/Heading'
import { RoomList } from '../components/RoomList/RoomList'

export function CreateRoomPage() {
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
          <RoomList />
        </Container>
      </div>
    </>
  )
}
