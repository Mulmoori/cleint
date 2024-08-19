import FaRadiation from "../../../assets/fishing-float-2.svg"
import { theme } from "../../../style/theme";
import { styled } from "styled-components";

export const HomeRoomTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 0.5rem;
`;

// icon
export const HomeRoomListIcon = styled(FaRadiation)`
    font-size: 1rem;
    margin-right: 1rem;
`;

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

interface HomeRoomListItemProps {
    isOnline: boolean;
}

export const HomeRoomListItem = styled.div<HomeRoomListItemProps>`
    max-width: 435px;
    max-height: 156px;
    padding: 20px;
    border: 1px solid
        ${(props) =>
            props.isOnline ? theme.Colors.primary : theme.Colors.neutral300};
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
    cursor: pointer;
`;
export const HomeRoomListItemTitle = styled.h2`
    ${theme.Fonts.H2}
`;

export const HomeRoomListItemDescription = styled.p`
    margin-bottom: 2rem;
`;

export const HomeRoomListItemHeadCount = styled.p`
    ${theme.Fonts.Sub3}
    color:${theme.Colors.neutral};
`;

export const HomeRoomListItemCreatedAt = styled.p`
    ${theme.Fonts.Sub3}
    color:${theme.Colors.neutral};
`;

export const HomeRoomListEmpty = styled.div`
    width: 435px;
    height: 156px;
    border: 1px solid ${theme.Colors.neutral};
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.Colors.neutral};
    ${theme.Fonts.Sub2}
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
`;

export const HomeRoomFooter = styled.div`
    display: flex;
    justify-content: space-between;
`;
