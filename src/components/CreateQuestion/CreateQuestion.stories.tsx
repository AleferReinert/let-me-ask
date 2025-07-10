import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { CreateQuestion } from './CreateQuestion'

const meta = {
  title: 'Components/CreateQuestion',
  component: CreateQuestion
} satisfies Meta<typeof CreateQuestion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, step }) => {
    await step('Heading', () => {
      const heading = canvas.getByRole('heading', {
        name: 'Fazer uma pergunta',
        level: 3
      })
      expect(heading).toBeVisible()
    })

    await step('Field component', () => {
      const field = canvas.getByTestId('FieldComponent')
      expect(field).toBeVisible()
    })

    await step('Button', () => {
      const button = canvas.getByRole('button', {
        name: 'Enviar pergunta'
      })
      expect(button).toBeVisible()
    })
  }
}
