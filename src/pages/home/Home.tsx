import HomeRoomList from "@components/home/homeRoomList/HomeRoomList";
import * as S from "./style";
import HomeSearch from "@components/home/homeSearch/HomeSearch";

export default function Home(): JSX.Element {
    return (
        <S.PageWrapper>
            {/*             
            --------------------------------------------------
      -----------------------참여코드 검색창 ------------------------
      --------------------------------------------------
      */}
            <HomeSearch />

            {/*             
            --------------------------------------------------
      -----------------------홈 룸 리스트------------------------
      --------------------------------------------------
      */}

            <S.HomeRoommListHeader>
                <S.HomeTitle>참여중인 나루터들</S.HomeTitle>
            </S.HomeRoommListHeader>
            <HomeRoomList />
        </S.PageWrapper>
    );
}
