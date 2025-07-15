import { useEffect, useState } from 'react'

export function useAuth() {
	const [isAuthenticated, setIsAuthenticated] = useState(() => !!localStorage.getItem('token'))

	useEffect(() => {
		const onStorageChange = () => {
			setIsAuthenticated(!!localStorage.getItem('token'))
		}

		window.addEventListener('storage', onStorageChange)

		return () => {
			window.removeEventListener('storage', onStorageChange)
		}
	}, [])

	return { isAuthenticated }
}
