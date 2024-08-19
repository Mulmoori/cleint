import { useEffect, useState } from 'react';
import * as S from './style';

interface Room {
  id: number;
  title: string;
  description: string;
  maxHeadCount: number;
  currentHeadCount: number;
  createdAt: string;
}

export default function HomeRoomList(): JSX.Element {
  // room dummy data
  const [rooms, setRooms] = useState<Room[]>([]);

  const ROOM_DUMMY_DATA: Room[] = [
    {
      id: 1,
      title: '방 제목1',
      description: '방 설명1',
      maxHeadCount: 4,
      currentHeadCount: 2,
      createdAt: '2021-08-01',
    },
    {
      id: 2,
      title: '방 제목2',
      description: '방 설명2',
      maxHeadCount: 4,
      currentHeadCount: 3,
      createdAt: '2021-08-02',
    },
    {
      id: 3,
      title: '방 제목3',
      description: '방 설명3',
      maxHeadCount: 4,
      currentHeadCount: 4,
      createdAt: '2021-08-03',
    },
    {
      id: 4,
      title: '방 제목3',
      description: '방 설명3',
      maxHeadCount: 4,
      currentHeadCount: 4,
      createdAt: '2021-08-03',
    },
    {
      id: 5,
      title: '방 제목3',
      description: '방 설명3',
      maxHeadCount: 4,
      currentHeadCount: 4,
      createdAt: '2021-08-03',
    },
    {
      id: 6,
      title: '방 제목3',
      description: '방 설명3',
      maxHeadCount: 4,
      currentHeadCount: 4,
      createdAt: '2021-08-03',
    },
    {
      id: 7,
      title: '방 제목3',
      description: '방 설명3',
      maxHeadCount: 4,
      currentHeadCount: 4,
      createdAt: '2021-08-03',
    },
    {
      id: 8,
      title: '방 제목3',
      description: '방 설명3',
      maxHeadCount: 4,
      currentHeadCount: 4,
      createdAt: '2021-08-03',
    },
  ];

  useEffect(() => {
    setRooms(ROOM_DUMMY_DATA);
  }, []);

  return (
    <S.HomeRoomListWrapper>
      {rooms.map((room) => (
        <S.HomeRoomListItem key={room.id}>
          <S.HomeRoomListItemTitle>{room.title}</S.HomeRoomListItemTitle>
          <S.HomeRoomListItemDescription>
            {room.description}
          </S.HomeRoomListItemDescription>
          <S.HomeRoomListItemHeadCount>
            {room.currentHeadCount} / {room.maxHeadCount}
          </S.HomeRoomListItemHeadCount>
          <S.HomeRoomListItemCreatedAt>
            {room.createdAt}
          </S.HomeRoomListItemCreatedAt>
        </S.HomeRoomListItem>
      ))}
    </S.HomeRoomListWrapper>
  );
}
