import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { PageHeader } from './PageHeader'

const meta = {
  title: 'Components/PageHeader',
  component: PageHeader,
  args: {
    title: 'Lorem ipsum'
  }
} satisfies Meta<typeof PageHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, step }) => {
    await step('Title', () => {
      const name = canvas.getByRole('heading', { level: 2 })
      expect(name).toHaveTextContent('Lorem ipsum')
    })
  }
}

export const WithDescription: Story = {
  args: {
    description: 'Dolor sit amet consectetur adipiscing.'
  },
  play: async ({ canvas, step }) => {
    await step('Description', () => {
      const description = canvas.getByRole('paragraph')
      expect(description).toHaveTextContent('Dolor sit amet consectetur adipiscing.')
    })
  }
}

export const WithRecordAudioLink: Story = {
  args: {
    recordAudioLink: '/record-link'
  },
  play: async ({ canvas, step }) => {
    await step('Description', () => {
      const link = canvas.getByRole('link', { name: 'Gravar áudio' })
      expect(link).toHaveAttribute('href', '/record-link')
    })
  }
}
