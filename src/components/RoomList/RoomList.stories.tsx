import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { handlerGetRooms } from '../../mocks/handlers/getRooms'
import { RoomList } from './RoomList'

const meta = {
  title: 'Components/RoomList',
  component: RoomList,
  parameters: {
    msw: {
      handlers: [handlerGetRooms]
    }
  }
} satisfies Meta<typeof RoomList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, step }) => {
    await step('Room list', async () => {
      const rooms = await canvas.findAllByTestId('RoomItemComponent')
      expect(rooms.length).toBeGreaterThan(1)
      expect(canvas.getByRole('list')).toBeVisible()
    })
  }
}
