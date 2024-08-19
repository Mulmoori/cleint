import { FaRadiation } from "react-icons/fa";
import { theme } from "../../../style/theme";
import { styled } from "styled-components";

export const HomeSearchhWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    width: 40rem;
    gap: 1rem;
`;

export const HomeSearchInput = styled.input`
    height: 3rem;
    border-radius: 30px;
    border: 1px solid ${theme.Colors.gray};
    padding: 0 1rem;
    // placeholder text size
    ::placeholder {
        size: 1rem;
        ${theme.Fonts.Sub3}
    }
`;

export const HomeSearchInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    // 오른쪽 정렬
`;
export const HomeSearchInputFooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    justify-content: flex-end;
`;

export const HomeSearchInputFooterText = styled.p`
    color: ${theme.Colors.gray};
    ${theme.Fonts.Sub3}
`;

export const HomeSearchInputFooterButtonText = styled.p`
    color: ${theme.Colors.black};
    ${theme.Fonts.Sub3}
    margin-left: 0.5rem;
    cursor: pointer;
`;

export const HomeSearchParticipantsButton = styled.button`
    width: 8rem;
    height: 3rem;
    border-radius: 30px;
    background-color: ${theme.Colors.primary};
    color: ${theme.Colors.white};
    border: none;
    cursor: pointer;
    ${theme.Fonts.H5}
    font-weight: bold;
    margin-top: 1rem;
`;
