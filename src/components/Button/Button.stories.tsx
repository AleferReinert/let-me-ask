import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default button'
  },
  play: ({ canvas, step }) => {
    const button = canvas.getByRole('button')

    step('Children', () => {
      expect(button).toHaveTextContent('Default button')
    })
  }
}
