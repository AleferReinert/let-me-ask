import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/internal/test'
import { handlerGetRoomQuestions } from '../../mocks/handlers/getRoomQuestions'
import { QuestionList } from './QuestionList'

const meta = {
  title: 'Components/QuestionList',
  component: QuestionList,
  parameters: {
    msw: {
      handlers: [handlerGetRoomQuestions]
    }
  },
  args: {
    roomId: 'ed38b48b-c2cc-4f34-c917-c5111707daf9'
  }
} satisfies Meta<typeof QuestionList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, step }) => {
    await step('List of questions with answers', async () => {
      const items = await canvas.findAllByTestId('QuestionAnswerComponent')
      expect(items.length).toBeGreaterThan(1)
      expect(canvas.getByRole('list')).toBeVisible()
    })
  }
}
