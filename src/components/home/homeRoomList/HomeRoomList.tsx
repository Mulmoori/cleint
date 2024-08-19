import { useEffect, useState } from "react";
import * as S from "./style";
import { theme } from "../../../style/theme";
import Badge from "@components/common/badge/Badge";

interface Room {
    id: number;
    title: string;
    description: string;
    currentHeadCount: number;
    isOnline: boolean;
    createdAt: string;
}

export default function HomeRoomList(): JSX.Element {
    // room dummy data
    const [rooms, setRooms] = useState<Room[]>([]);

    const ROOM_DUMMY_DATA: Room[] = [
        {
            id: 1,
            title: "객체지향 프로그래밍",
            description: "방 설명1",
            currentHeadCount: 2,
            isOnline: true,
            createdAt: "2021-08-01",
        },
        {
            id: 2,
            title: "방 제목2",
            description: "방 설명2",
            currentHeadCount: 3,
            isOnline: false,
            createdAt: "2021-08-02",
        },
        {
            id: 3,
            title: "방 제목3",
            description: "방 설명3",
            currentHeadCount: 4,
            isOnline: true,
            createdAt: "2021-08-03",
        },
        {
            id: 4,
            title: "방 제목3",
            description: "방 설명3",
            currentHeadCount: 4,
            isOnline: true,
            createdAt: "2021-08-03",
        },
        {
            id: 5,
            title: "방 제목3",
            description: "방 설명3",
            currentHeadCount: 4,
            isOnline: true,
            createdAt: "2021-08-03",
        },
        {
            id: 6,
            title: "방 제목3",
            description: "방 설명3",
            currentHeadCount: 4,
            isOnline: true,
            createdAt: "2021-08-03",
        },
        {
            id: 7,
            title: "방 제목3",
            description: "방 설명3",
            currentHeadCount: 4,
            isOnline: true,
            createdAt: "2021-08-03",
        },
        {
            id: 8,
            title: "방 제목3",
            description: "방 설명3",
            currentHeadCount: 4,
            isOnline: true,
            createdAt: "2021-08-03",
        },
    ];

    useEffect(() => {
        setRooms(ROOM_DUMMY_DATA);
    }, []);

    return (
        <S.HomeRoomListWrapper>
            {rooms.length === 0 ? (
                <S.HomeRoomListEmpty>
                    참여한 나루터가 없습니다...
                </S.HomeRoomListEmpty>
            ) : (
                rooms.map((room) => (
                    <S.HomeRoomListItem key={room.id} isOnline={room.isOnline}>
                        <S.HomeRoomTitleWrapper>
                            <S.HomeRoomListIcon />
                            <S.HomeRoomListItemTitle>
                                {room.title}
                            </S.HomeRoomListItemTitle>
                        </S.HomeRoomTitleWrapper>
                        <S.HomeRoomListItemDescription>
                            {room.isOnline ? (
                                <Badge
                                    text="관리자 온라인"
                                    color={theme.Colors.primary}
                                    textColor={theme.Colors.white}
                                />
                            ) : (
                                <Badge
                                    text="관리자 오프라인"
                                    color={theme.Colors.neutral300}
                                    textColor={theme.Colors.neutral}
                                />
                            )}
                        </S.HomeRoomListItemDescription>
                        <S.HomeRoomFooter>
                            <S.HomeRoomListItemHeadCount>
                                현재 {room.currentHeadCount}명 참여중
                            </S.HomeRoomListItemHeadCount>
                            <S.HomeRoomListItemCreatedAt>
                                참여 날짜: {room.createdAt}
                            </S.HomeRoomListItemCreatedAt>
                        </S.HomeRoomFooter>
                    </S.HomeRoomListItem>
                ))
            )}
        </S.HomeRoomListWrapper>
    );
}
