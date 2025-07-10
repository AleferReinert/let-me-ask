import { HttpResponse, http } from 'msw'
import type { RoomQuestionProps } from '../../http/useRoomQuestions'

export const handlerGetRoomQuestions = http.get(
  `${import.meta.env.VITE_API_URL}/rooms/ed38b48b-c2cc-4f34-c917-c5111707daf9/questions`,
  () => {
    return HttpResponse.json<RoomQuestionProps[]>([
      {
        id: '1348fe0e-08d5-4cab-bf4c-5eb69dcde768',
        question: 'Sed eget accumsan felis, viverra euismod nulla. ',
        answer:
          'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla interdum nibh in vehicula tincidunt. ',
        createdAt: '2026-03-24T11:02:09.959Z'
      },
      {
        id: 'de469cc1-e4d4-4c60-ffc1-2bdad64e26a0',
        question:
          'Aenean a nulla commodo, rutrum orci eget, pellentesque erat. ',
        answer: 'Aliquam a est massa. ',
        createdAt: '2025-09-11T11:14:35.621Z'
      },
      {
        id: 'cfe324e7-4fc0-4eff-1fc5-6bd98e5ebe4f',
        question: 'Aliquam eu interdum purus, sed viverra lorem. ',
        answer: 'Donec malesuada odio in posuere eleifend. ',
        createdAt: '2024-03-27T13:42:31.961Z'
      },
      {
        id: '760d7274-a1f9-4a83-b12f-f70668c10c47',
        question: 'Aenean sed lacus ac arcu blandit placerat. ',
        answer:
          'Vivamus porttitor enim eros, eu ultricies lectus pulvinar eget. ',
        createdAt: '2023-11-05T01:35:09.241Z'
      }
    ])
  }
)
