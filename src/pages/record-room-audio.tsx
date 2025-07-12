import { Navigate, useParams } from 'react-router-dom'
import { Alert } from '../components/Alert/Alert'
import { Button } from '../components/Button/Button'
import { GoBackLink } from '../components/GoBackLink/GoBackLink'
import { Layout } from '../components/Layout/Layout'
import { PageHeader } from '../components/PageHeader/PageHeader'
import { useRecorder } from '../http/useRecorder'
import { useRoom } from '../http/useRoom'

const isRecordSupportedByBrowser = !!navigator.mediaDevices && typeof window.MediaRecorder === 'function'

export function RecordRoomAudioPage() {
	const { roomId } = useParams()
	const room = useRoom(roomId)
	const { alertError, isRecording, startRecording, stopRecording, status } = useRecorder()

	if (!(roomId && room)) {
		return <Navigate replace to='/' />
	}

	return (
		<Layout>
			<GoBackLink />
			<PageHeader title={`Sala ${room.name}`} description={room.description} />
			{alertError && <Alert variant='error'>{alertError}</Alert>}

			{isRecordSupportedByBrowser && (
				<div className='flex justify-center'>
					<div className='flex flex-col gap-7 items-center'>
						<h2 className='text-theme-primary'>{status}</h2>

						{isRecording ? (
							<Button onClick={stopRecording}>Pausar</Button>
						) : (
							<Button onClick={startRecording}>Gravar áudio</Button>
						)}
					</div>
				</div>
			)}

			{!isRecordSupportedByBrowser && (
				<Alert variant='warning'>Seu navegador não suporta gravação de áudio, atualize ou use outro navegador.</Alert>
			)}
		</Layout>
	)
}
