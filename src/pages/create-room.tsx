import { Container } from '../components/Container/Container'
import { Header } from '../components/Header/Header'
import { PageHeader } from '../components/PageHeader/PageHeader'
import { RoomList } from '../components/RoomList/RoomList'

export function CreateRoomPage() {
  return (
    <>
      <Header />
      <div className="mb-8">
        <Container>
          <PageHeader
            title="Salas recentes"
            description="Acesso rápido para as salas criadas recentemente"
          />
          <RoomList />
        </Container>
      </div>
    </>
  )
}
