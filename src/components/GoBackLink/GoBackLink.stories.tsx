import type { Meta, StoryObj } from '@storybook/react-vite'
import { GoBackLink } from './GoBackLink'

const meta = {
	title: 'Components/GoBackLink',
	component: GoBackLink,
	tags: ['!autodocs']
} satisfies Meta<typeof GoBackLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'GoBackLink'
}

