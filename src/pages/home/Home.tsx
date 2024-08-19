import HomeRoomList from '@components/home/homeRoomList/HomeRoomList';
import * as S from './style';

export default function Home(): JSX.Element {
  return (
    <S.PageWrapper>
      <S.HomeTitle>홈 타이틀</S.HomeTitle>
      <S.HomeSubTitle>홈 서브 타이틀</S.HomeSubTitle>
      <HomeRoomList />
    </S.PageWrapper>
  );
}
