import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Header } from './Header'

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, step }) => {
    await step('Logo with h1', () => {
      const heading = canvas.getByRole('heading', { level: 1 })
      const img = canvas.getByRole('img', { name: 'Let Me Ask' })

      expect(heading).toBeVisible()
      expect(img).toBeVisible()
    })
  }
}
