import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Room } from './Room'

const meta = {
  title: 'Components/Room',
  component: Room,
  args: {
    id: '1',
    name: 'Lorem ipsum',
    questionsCount: 10,
    createdAt: '2025-07-09T23:22:51.806Z'
  }
} satisfies Meta<typeof Room>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, step }) => {
    await step('Name', () => {
      const name = canvas.getByRole('heading', { level: 3 })
      expect(name).toHaveTextContent('Lorem ipsum')
    })

    await step('Questions count', () => {
      const text = canvas.getByText('10 perguntas')
      expect(text).toBeVisible()
    })

    await step('Created at', () => {
      const text = canvas.getByText('há 17 horas')
      expect(text).toBeVisible()
    })
  }
}
