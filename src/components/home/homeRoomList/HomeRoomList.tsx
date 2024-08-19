import { useEffect, useState } from "react";
import * as S from "./style";
import { theme } from "../../../style/theme";
import Badge from "@components/common/badge/Badge";
import instance from "../../../api/axios.ts";
import {calculateTime} from "../../../utils/DateTimeUtils.ts";
import {useRecoilState} from "recoil";
import {narooteoState} from "../../../context/narooteoState.ts";
import {useNavigate} from "react-router-dom";

interface Room {
    id: number;
    title: string;
    description: string;
    currentHeadCount: number;
    isOnline: boolean;
    createdAt: string;
}

interface ResponseWrapper {
    id: number;
    title: string;
    is_connection_host: boolean;
    participant_count: number;
    participated_at: string;
}

export default function HomeRoomList(): JSX.Element {
    // room dummy data
    const [rooms, setRooms] = useState<Room[]>([]);
    const [selectedRoomId, setSelectedRoomId] = useRecoilState(narooteoState);
    const navigate = useNavigate();

    const fetchRooms = async () => {
        try {
            const response = await instance.get('/api/v1/users/narooteos/overviews');

            if (response.status === 200) {
                const data: ResponseWrapper[] = response.data.data.overviews;

                const rooms: Room[] = data.map((room) => ({
                    id: room.id,
                    title: room.title,
                    description: "",
                    currentHeadCount: room.participant_count,
                    isOnline: room.is_connection_host,
                    createdAt: room.participated_at
                }));

                setRooms(rooms);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleRoomClick = (roomId: number) => {
        setSelectedRoomId(roomId);

        navigate(`/naruteo/${roomId}`);
    }

    useEffect(() => {
        fetchRooms().then(r => r);
    }, []);

    return (
        <S.HomeRoomListWrapper>
            {rooms.length === 0 ? (
                <S.HomeRoomListEmpty>
                    참여한 나루터가 없습니다...
                </S.HomeRoomListEmpty>
            ) : (
                rooms.map((room) => (
                    <S.HomeRoomListItem key={room.id} isOnline={room.isOnline} onClick={() => handleRoomClick(room.id)}>
                        <S.HomeRoomTitleWrapper>
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
