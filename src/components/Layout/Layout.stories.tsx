import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Layout } from './Layout'

const meta = {
	title: 'Components/Layout',
	component: Layout,
	parameters: {
		layout: 'fullscreen'
	}
} satisfies Meta<typeof Layout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: (
			<div className='bg-theme-primary-500 text-white text-center py-2'>Children with styles to view dimensions</div>
		)
	},
	play: async ({ canvas, step }) => {
		await step('Children', () => {
			const children = canvas.getByText(/children/i)
			expect(children).toBeVisible()
		})

		await step('Header', () => {
			const header = canvas.getByRole('banner')
			expect(header).toBeVisible()
		})
	}
}

