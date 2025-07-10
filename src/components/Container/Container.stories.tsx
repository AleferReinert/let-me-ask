import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Container } from './Container'

const meta = {
  title: 'Components/Container',
  component: Container
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div className="bg-theme-primary text-white text-center py-2">
        Children with styles to view dimensions
      </div>
    )
  },
  play: ({ canvas, step }) => {
    const children = canvas.getByText(/children/i)

    step('Children', () => {
      expect(children).toBeVisible()
    })
  }
}
