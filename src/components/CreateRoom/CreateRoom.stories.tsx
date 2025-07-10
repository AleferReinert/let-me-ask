import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { CreateRoom } from './CreateRoom'

const meta = {
  title: 'Components/CreateRoom',
  component: CreateRoom
} satisfies Meta<typeof CreateRoom>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, step }) => {
    await step('Heading', () => {
      const heading = canvas.getByRole('heading', {
        name: 'Criar uma nova sala',
        level: 3
      })
      expect(heading).toBeVisible()
    })

    await step('Two fields components', () => {
      const fields = canvas.getAllByTestId('FieldComponent')
      expect(fields.length).toBe(2)
    })

    await step('Button', () => {
      const button = canvas.getByRole('button', {
        name: 'Criar sala'
      })
      expect(button).toBeVisible()
    })
  }
}
