import { Navigate } from 'react-router-dom'
import { CreateRoom } from '../components/CreateRoom/CreateRoom'
import { Layout } from '../components/Layout/Layout'
import { PageHeader } from '../components/PageHeader/PageHeader'
import { RoomList } from '../components/RoomList/RoomList'
import { useAuth } from '../http/useAuth'

export function RoomsPage() {
	const { isAuthenticated } = useAuth()

	if (!isAuthenticated) {
		return <Navigate replace to='/' />
	}

	return (
		<Layout>
			<PageHeader title='Salas recentes' description='Crie uma nova sala ou acesse as salas criadas recentemente' />

			<div className='grid gap-4 lg:grid-cols-[min-content_auto] lg:gap-8'>
				<div className='flex-1 sm:w-xs sm:mx-auto lg:mx-0'>
					<CreateRoom />
				</div>
				<RoomList />
			</div>
		</Layout>
	)
}
