import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/internal/test'
import { QuestionAnswer } from './QuestionAnswer'

const meta = {
  title: 'Components/QuestionAnswer',
  component: QuestionAnswer,
  args: {
    id: '1',
    question:
      'What are the main differences between ReactJS for web and React Native?',
    answer:
      'ReactJS is for web using HTML/CSS, while React Native uses native mobile components and styles with JavaScript. Navigation and platform APIs differ too.',
    createdAt: new Date(Date.now() - 17 * 60 * 60 * 1000).toString()
  }
} satisfies Meta<typeof QuestionAnswer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, step }) => {
    await step('Question', () => {
      const question = canvas.getByRole('heading', { level: 3 })
      expect(question).toHaveTextContent(
        'What are the main differences between ReactJS for web and React Native?'
      )
    })

    await step('Answer', () => {
      const answer = canvas.getAllByRole('paragraph')[0]
      expect(answer).toContainHTML('ReactJS is for web ')
    })

    await step('Formatted created at', () => {
      const answer = canvas.getByText('há 17 horas')
      expect(answer).toBeVisible()
    })
  }
}
