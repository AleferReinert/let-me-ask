import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Badge } from './Badge'

const meta = {
	title: 'Components/Badge',
	component: Badge
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		questionsCount: 0
	},
	play: async ({ canvas, step }) => {
		await step('Text', () => {
			const badge = canvas.getByText('Sem perguntas')
			expect(badge).toBeVisible()
		})
	}
}

