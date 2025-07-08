import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

type GetRoomAPIResponse = Array<{
  id: string;
  name: string;
}>;

export function CreateRoomPage() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`);
      const result: GetRoomAPIResponse = await response.json();
      return result;
    }
  });

  return (
    <div>
      <h1>Create room</h1>

      {isLoading && <p>Loading...</p>}

      <div className="flex flex-col gap-2">
        {data?.map((room) => {
          return (
            <Link
              className="text-blue-600 transition hover:underline hover:text-blue-800 "
              key={room.id}
              to={`/room/${room.id}`}
            >
              {room.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
