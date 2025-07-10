import { Navigate, useParams } from 'react-router-dom'
import { Container } from '../components/Container/Container'
import { CreateQuestion } from '../components/CreateQuestion/CreateQuestion'
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
        <CreateQuestion roomId={params.id} />
        <QuestionList roomId={params.id} />
      </Container>
    </>
  )
}
