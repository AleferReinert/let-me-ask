import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { RoomItem } from './RoomItem'

const meta = {
  title: 'Components/RoomItem',
  component: RoomItem,
  args: {
    id: '1',
    name: 'Lorem ipsum',
    questionsCount: 10,
    createdAt: new Date(Date.now() - 17 * 60 * 60 * 1000).toString()
  }
} satisfies Meta<typeof RoomItem>

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

    await step('Formatted created at', () => {
      const text = canvas.getByText('há 17 horas')
      expect(text).toBeVisible()
    })
  }
}
