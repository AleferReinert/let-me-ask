import { Navigate, useParams } from 'react-router-dom'
import { CreateQuestion } from '../components/CreateQuestion/CreateQuestion'
import { Layout } from '../components/Layout/Layout'
import { PageHeader } from '../components/PageHeader/PageHeader'
import { QuestionList } from '../components/QuestionList/QuestionList'

export function RoomPage() {
  const params = useParams()

  if (!params.id) {
    return <Navigate replace to="/" />
  }

  return (
    <Layout>
      <PageHeader title="Sala de perguntas" recordAudioLink={`/room/${params.id}/audio`} />
      <CreateQuestion roomId={params.id} />
      <QuestionList roomId={params.id} />
    </Layout>
  )
}
