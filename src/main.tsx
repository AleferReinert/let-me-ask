import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'

// biome-ignore lint/style/noNonNullAssertion: required by React
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
)

