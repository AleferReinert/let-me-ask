import { CreateRoom } from '../components/CreateRoom/CreateRoom'
import { Layout } from '../components/Layout/Layout'
import { PageHeader } from '../components/PageHeader/PageHeader'
import { RoomList } from '../components/RoomList/RoomList'

export function CreateRoomPage() {
  return (
    <Layout>
      <PageHeader title="Salas recentes" description="Crie uma nova sala ou acesse as salas criadas recentemente" />
      <div className="grid gap-4 lg:grid-cols-[min-content_auto] lg:gap-8">
        <div className="flex-1 sm:w-xs sm:mx-auto lg:mx-0">
          <CreateRoom />
        </div>
        <RoomList />
      </div>
    </Layout>
  )
}
