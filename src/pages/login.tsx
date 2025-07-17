import { type TokenResponse, useGoogleLogin } from '@react-oauth/google'
import { useEffect, useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Navigate, useNavigate } from 'react-router-dom'
import { Alert } from '../components/Alert/Alert'
import { Button } from '../components/Button/Button'
import { PageHeader } from '../components/PageHeader/PageHeader'
import { useAuth } from '../http/useAuth'
import { useCreateUser } from '../http/useCreateUser'

interface GoogleProfileProps {
	id: string
	name: string
	given_name: string
	family_name: string
	email: string
	picture: string
}

export function LoginPage() {
	const [user, setUser] = useState<Omit<TokenResponse, 'error' | 'error_description' | 'error_uri'>>()
	const [profile, setProfile] = useState<GoogleProfileProps | null>(null)
	const navigate = useNavigate()
	const [isLogged, setIsLogged] = useState(false)
	const [error, setError] = useState('')
	const { mutateAsync: createUser } = useCreateUser(profile?.id)
	const { isAuthenticated } = useAuth()

	const login = useGoogleLogin({
		onSuccess: codeResponse => {
			setUser(codeResponse)
			setIsLogged(true)
		},
		onError: () => {
			setError('Não foi possível fazer o login. Tente novamente.')
		}
	})

	// biome-ignore lint/correctness/useExhaustiveDependencies: unucessary
	useEffect(() => {
		if (profile) {
			;(async () => {
				try {
					await createUser({
						id: profile.id,
						name: profile.name,
						givenName: profile.given_name,
						familyName: profile.family_name,
						email: profile.email,
						picture: profile.picture
					})

					navigate('/rooms')
				} catch {
					setError('Não foi possível criar o usuário. Tente novamente.')
				}
			})()
		}
	}, [profile])

	useEffect(() => {
		if (user) {
			localStorage.setItem('token', user.access_token)
			const getUserData = async () => {
				const response = await fetch(
					`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
					{
						headers: {
							Authorization: `Bearer ${user.access_token}`,
							Accept: 'application/json'
						}
					}
				)
				const result: GoogleProfileProps = await response.json()
				localStorage.setItem('userId', result.id)
				setProfile(result)
			}

			try {
				getUserData()
			} catch {
				setError('Não foi possível criar o usuário. ')
			}
		}
	}, [user])

	if (isAuthenticated) {
		return <Navigate to='/rooms' replace />
	}

	return (
		<div className='lg:grid lg:grid-cols-2 h-screen'>
			<div className='hidden lg:flex flex-col gap-4 justify-center bg-theme-primary-500 px-16 py-20'>
				<img src='/illustration.png' alt='' aria-hidden width='313' height='404' className='w-52 2xl:w-[313px]' />
				<h2 className='text-white font-heading text-4xl'>Toda pergunta tem uma resposta</h2>
				<p className='text-white text-xl'>Aprenda e compartilhe conhecimento com outras pessoas</p>
			</div>

			<div className='bg-theme-gray-100 flex h-full justify-center items-center'>
				<div className='min-h-56 flex flex-col justify-center'>
					<img alt='Let Me Ask' src='/logo.svg' width='154.2' height='69' className='mb-14 mx-auto' />
					{error && !isLogged && (
						<>
							<PageHeader title='Houve um erro!' />
							<Alert variant='error' className='mb-4'>
								{error}
							</Alert>
						</>
					)}

					{isLogged ? (
						<>
							<PageHeader title='Login efetuado!' />
							<Alert variant='success'>
								<span className='rounded-full border-2 border-transparent border-l-inherit animate-spin inline-block size-4' />
								<span>Redirecionando...</span>
							</Alert>
						</>
					) : (
						<Button onClick={() => login()}>
							<FaGoogle aria-hidden size={16} />
							Entrar com o Google
						</Button>
					)}
				</div>
			</div>
		</div>
	)
}
