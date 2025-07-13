import { VscArrowLeft } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'

export function GoBackLink() {
	const navigate = useNavigate()

	return (
		<button
			type='button'
			onClick={() => navigate(-1)}
			className='focus:outline-none text-zinc-500 text-sm cursor-pointer flex gap-1 hover:underline mb-1'
		>
			<VscArrowLeft className='size-4 transition' aria-hidden />
			Voltar
		</button>
	)
}
