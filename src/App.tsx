import { GoogleOAuthProvider } from '@react-oauth/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './globals.css'
import { LoginPage } from './pages/login'
import { RecordPage } from './pages/record'
import { RoomPage } from './pages/room'
import { RoomsPage } from './pages/rooms'

const queryClient = new QueryClient()

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
				<BrowserRouter>
					<Routes>
						<Route element={<LoginPage />} index />
						<Route element={<RoomsPage />} path='/rooms' />
						<Route element={<RoomPage />} path='/room/:roomId' />
						<Route element={<RecordPage />} path='/room/:roomId/record' />
					</Routes>
				</BrowserRouter>
			</GoogleOAuthProvider>
		</QueryClientProvider>
	)
}

