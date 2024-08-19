import { styled } from 'styled-components';

export const HomeRoomListWrapper = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: grid;

  @media (max-width: 768px) {
    grid-template-rows: 2fr;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-rows: 3fr;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-rows: 4fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  grid-gap: 4rem 2rem;
`;

export const HomeRooms = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: 0.3s;
`;

export const HomeRoomListItem = styled.div`
  border: 1px solid red;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const HomeRoomListItemTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

export const HomeRoomListItemDescription = styled.p`
  margin: 0;
  font-size: 1rem;
`;

export const HomeRoomListItemHeadCount = styled.p`
  margin: 0;
  font-size: 1rem;
`;

export const HomeRoomListItemCreatedAt = styled.p`
  margin: 0;
  font-size: 1rem;
`;
