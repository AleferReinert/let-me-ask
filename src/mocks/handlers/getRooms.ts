import { HttpResponse, http } from 'msw'
import type { RoomItemProps } from '../../components/RoomItem/RoomItem'

export const handlerGetRooms = http.get(`${import.meta.env.VITE_API_URL}/rooms`, () => {
  return HttpResponse.json<RoomItemProps[]>([
    {
      id: 'ed38b48b-c2cc-4f34-c917-c5111707daf9',
      name: 'Grebe Ltd',
      createdAt: '2025-02-25T20:30:09.760Z',
      questionsCount: 5
    },
    {
      id: '73b346bf-533f-4545-7032-7f2d53162582',
      name: 'Hocutt - Licari',
      createdAt: '2024-10-16T13:08:34.768Z',
      questionsCount: 5
    },
    {
      id: 'e7b2874d-f52c-4b14-9b2e-ee8ca30b83f6',
      name: 'Blecha and Segner',
      createdAt: '2024-07-21T06:23:40.245Z',
      questionsCount: 5
    },
    {
      id: 'a6732832-9805-4da4-f281-fa7773aff23b',
      name: 'Lisko, Lince and Knackstedt',
      createdAt: '2024-07-13T13:39:47.095Z',
      questionsCount: 5
    }
  ])
})
