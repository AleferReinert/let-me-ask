import type { Preview } from '@storybook/react-vite'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { initialize, mswLoader } from 'msw-storybook-addon'
import { MemoryRouter } from 'react-router-dom'
import '../src/globals.css'

initialize()
const queryClient = new QueryClient()

const preview: Preview = {
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </QueryClientProvider>
    )
  ],
  loaders: [mswLoader],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  tags: ['autodocs']
}

export default preview
