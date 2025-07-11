import { useRef, useState } from 'react'
import { VscRecord } from 'react-icons/vsc'
import { Alert } from '../components/Alert/Alert'
import { Button } from '../components/Button/Button'
import { Layout } from '../components/Layout/Layout'

const isRecordSupportedByBrowser = !!navigator.mediaDevices && typeof window.MediaRecorder === 'function'

export function RecordRoomAudioPage() {
  const [isRecording, setIsRecording] = useState(false)
  const recorder = useRef<MediaRecorder | null>(null)
  const [alertError, setAlertError] = useState('')
  const [status, setStatus] = useState<React.ReactNode>('Aguardando gravação...')

  async function startRecording() {
    try {
      const audio = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44_100
        }
      })
      recorder.current = new MediaRecorder(audio, {
        mimeType: 'audio/webm',
        audioBitsPerSecond: 64_000
      })
      recorder.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          // biome-ignore lint/suspicious/noConsole: todo
          console.log(event.data)
        }
      }
      recorder.current.onstart = () => {
        setAlertError('')
        setStatus(
          <div className="flex gap-4 items-center">
            <VscRecord
              aria-hidden
              className="size-10 scale-[400%] fixed left-1/2 top-1/2 -ml-5 -mt-5 pointer-events-none opacity-5 text-theme-primary animate-ping"
            />
            <span className="ml-1">Gravando...</span>
          </div>
        )
      }
      recorder.current.onstop = () => setStatus('Gravação pausada!')
      recorder.current.start()
      setIsRecording(true)
    } catch (error) {
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
  }

  function stopRecording() {
    setIsRecording(false)
    setStatus('')
    if (recorder.current && recorder.current.state !== 'inactive') {
      recorder.current.stop()
    }
  }

  return (
    <Layout>
      {alertError && <Alert variant="error">{alertError}</Alert>}

      {isRecordSupportedByBrowser && (
        <div className="flex justify-center pt-30">
          <div className="flex flex-col gap-7 items-center">
            <h2 className="text-theme-primary">{status}</h2>

            {isRecording ? (
              <Button onClick={stopRecording}>Pausar</Button>
            ) : (
              <Button onClick={startRecording}>Gravar áudio</Button>
            )}
          </div>
        </div>
      )}

      {!isRecordSupportedByBrowser && (
        <Alert variant="warning">Seu navegador não suporta gravação de áudio, atualize ou use outro navegador.</Alert>
      )}
    </Layout>
  )
}
