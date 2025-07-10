import { Navigate, useParams } from 'react-router-dom'
import { Container } from '../components/Container/Container'
import { Header } from '../components/Header/Header'
import { PageHeader } from '../components/PageHeader/PageHeader'
import { QuestionList } from '../components/QuestionList/QuestionList'

export function RoomPage() {
  const params = useParams()

  if (!params.id) {
    return <Navigate replace to="/" />
  }

  return (
    <>
      <Header />
      <Container>
        <PageHeader title="Room" />
        <QuestionList roomId={params.id} />
      </Container>
    </>
  )
}
