import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from 'storybook/test'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  args: {
    children: <p>Lorem ipsum dolor sit amet.</p>
  }
}

export default meta

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  name: 'Error (default)',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const alert = canvas.getByRole('alert')

    await step('Required children', () => {
      const children = canvas.getByText(/lorem ipsum dolor sit amet/i)
      expect(children).toBeVisible()
    })

    await step('Colors', () => {
      expect(alert).toHaveClass('text-red-900 bg-red-100')
    })
  }
}

export const Success: Story = {
  args: {
    variant: 'success'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Colors', () => {
      const alert = canvas.getByRole('alert')
      expect(alert).toHaveClass('text-green-900 bg-green-100')
    })
  }
}

export const Info: Story = {
  args: {
    variant: 'info'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Colors', () => {
      const alert = canvas.getByRole('alert')
      expect(alert).toHaveClass('text-sky-900 bg-sky-100')
    })
  }
}

export const Warning: Story = {
  args: {
    variant: 'warning'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Colors', () => {
      const alert = canvas.getByRole('alert')
      expect(alert).toHaveClass('text-amber-900 bg-amber-100')
    })
  }
}
