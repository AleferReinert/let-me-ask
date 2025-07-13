import { useRef, useState } from 'react'
import { VscRecord } from 'react-icons/vsc'
import { useParams } from 'react-router-dom'

export function useRecorder() {
	const { roomId } = useParams()
	const [isRecording, setIsRecording] = useState(false)
	const recorder = useRef<MediaRecorder | null>(null)
	const [alertError, setAlertError] = useState('')
	const [status, setStatus] = useState<React.ReactNode>('Pronto para gravar!')
	const intervalRef = useRef<NodeJS.Timeout>(null)

	function handleAudioError(error: unknown) {
		setIsRecording(false)
		setStatus('')
		if (error instanceof DOMException && error.name === 'NotFoundError') {
			setAlertError('Nenhum microfone encontrado.')
		} else if (error instanceof DOMException && error.name === 'NotAllowedError') {
			setAlertError('Sem permissão ao microfone, verifique as configurações do navegador.')
		} else {
			setAlertError('Ocorreu um erro ao iniciar a gravação de áudio.')
		}
	}

	async function uploadAudio(audio: Blob) {
		const formData = new FormData()
		formData.append('file', audio, 'audio.webm')

		await fetch(`${import.meta.env.VITE_API_URL}/rooms/${roomId}/audio`, {
			method: 'POST',
			body: formData
		})
	}

	function createRecorder(audio: MediaStream) {
		try {
			recorder.current = new MediaRecorder(audio, {
				mimeType: 'audio/webm',
				audioBitsPerSecond: 64_000
			})
			recorder.current.ondataavailable = event => {
				if (event.data.size > 0) {
					uploadAudio(event.data)
				}
			}
			recorder.current.onstart = () => {
				setAlertError('')
				setStatus(
					<div className='flex gap-4 items-center'>
						<VscRecord
							aria-hidden
							className='size-10 scale-[400%] fixed left-1/2 top-1/2 -ml-5 -mt-5 pointer-events-none opacity-5 text-theme-primary-500 animate-ping'
						/>
						<span className='ml-1'>Gravando...</span>
					</div>
				)
			}
			recorder.current.onstop = () => setStatus('Gravação finalizada!')
			recorder.current.start()
		} catch (error) {
			handleAudioError(error)
		}
	}

	async function startRecording() {
		try {
			const audio = await navigator.mediaDevices.getUserMedia({
				audio: {
					echoCancellation: true,
					noiseSuppression: true,
					sampleRate: 44_100
				}
			})
			createRecorder(audio)
			intervalRef.current = setInterval(() => {
				recorder.current?.stop()
				createRecorder(audio)
			}, 5000)
			setIsRecording(true)
		} catch (error) {
			handleAudioError(error)
		}
	}

	function stopRecording() {
		setIsRecording(false)
		setStatus('')
		if (recorder.current && recorder.current.state !== 'inactive') {
			recorder.current.stop()
		}

		if (intervalRef.current) {
			clearInterval(intervalRef.current)
		}
	}

	return { startRecording, stopRecording, alertError, status, isRecording }
}
