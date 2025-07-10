import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Container } from './Container'

const meta = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Children'
  },
  play: ({ canvas, step }) => {
    const children = canvas.getByText('Children')

    step('Required children', () => {
      expect(children).toBeVisible()
    })
  }
}
