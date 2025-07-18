import { googleLogout } from '@react-oauth/google'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../../http/useUser'
import { Button } from '../Button/Button'
import { Container } from '../Container/Container'

export function Header() {
	const { data: user, isLoading } = useUser()
	const navigate = useNavigate()

	if (isLoading) {
		return null
	}

	function logout() {
		googleLogout()
		localStorage.removeItem('token')
		localStorage.removeItem('userId')
		navigate('/')
	}

	return (
		<header className='py-4 border-b border-neutral-200 bg-white'>
			<Container className='flex justify-between items-center'>
				<h1>
					<Link to='/rooms' className='focus:outline-none'>
						<img alt='Let Me Ask' src='/logo.svg' width='100.26' height='45' />
					</Link>
				</h1>

				<div className='flex gap-4 items-center'>
					{user && <div>Olá, {user.givenName}!</div>}

					<Button size='small' onClick={logout} variant='outline'>
						Logout
					</Button>
				</div>
			</Container>
		</header>
	)
}
