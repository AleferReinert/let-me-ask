import { Navigate, useParams } from 'react-router-dom'

export function RoomPage() {
  const params = useParams()

  if (!params.id) {
    return <Navigate replace to="/" />
  }

  return <h1>Room</h1>
}
