import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { Field } from './Field'

const meta = {
  title: 'Components/Field',
  component: Field,
  args: {
    label: 'E-mail',
    name: 'email'
  }
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, step }) => {
    const label = canvas.getByLabelText('E-mail')
    const input = canvas.getByRole('textbox')

    await step('Label', () => {
      expect(label).toBeVisible()
    })

    await step('Input focus on label click', async () => {
      await userEvent.click(label)
      expect(input).toHaveFocus()
    })
  }
}

export const WithError: Story = {
  args: {
    errorMessage: 'E-mail inválido'
  },
  play: async ({ canvas, step }) => {
    await step('Border red', () => {
      const input = canvas.getByRole('textbox')
      expect(input).toHaveClass('border-red-400')
    })

    await step('Error message', () => {
      const message = canvas.getByText('E-mail inválido')
      expect(message).toBeVisible()
    })
  }
}

export const AsTextarea: Story = {
  args: {
    as: 'textarea'
  },
  play: async ({ canvas, step }) => {
    const label = canvas.getByLabelText('E-mail')
    const textarea = document.getElementsByTagName('textarea')[0]

    await step('Error message', () => {
      expect(textarea).toBeVisible()
    })

    await step('Textarea focus on label click', async () => {
      await userEvent.click(label)
      expect(textarea).toHaveFocus()
    })
  }
}

export const Required: Story = {
  args: {
    required: true
  },
  play: async ({ canvas, step }) => {
    await step('Asterisk', () => {
      const asterisk = canvas.getByText('*')
      expect(asterisk).toBeVisible()
    })
  }
}
