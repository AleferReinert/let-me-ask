import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { CreateQuestion } from './CreateQuestion'

const meta = {
	title: 'Components/CreateQuestion',
	component: CreateQuestion,
	args: {
		roomId: '1'
	}
} satisfies Meta<typeof CreateQuestion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	play: async ({ canvas, step }) => {
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

