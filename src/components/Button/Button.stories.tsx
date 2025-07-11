import type { Meta, StoryObj } from '@storybook/react-vite'
import { VscRecord } from 'react-icons/vsc'
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
  play: async ({ canvas, step }) => {
    const button = canvas.getByRole('button')

    await step('Children', () => {
      expect(button).toHaveTextContent('Default button')
    })

    await step('Default sizes', () => {
      expect(button).toHaveClass('h-12 leading-12 px-4')
    })
  }
}

export const Small: Story = {
  args: {
    children: 'Small button',
    size: 'small'
  },
  play: async ({ canvas, step }) => {
    const button = canvas.getByRole('button')

    await step('Small sizes', () => {
      expect(button).toHaveClass('h-10 leading-10 px-3 text-sm')
    })
  }
}

export const AsLink: Story = {
  args: {
    children: 'As link',
    as: 'link',
    to: '/'
  },
  play: ({ canvas, step }) => {
    const link = canvas.getByRole('link')

    step('Link', () => {
      expect(link).toHaveTextContent('As link')
    })
  }
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <VscRecord /> With icon
      </>
    )
  }
}
