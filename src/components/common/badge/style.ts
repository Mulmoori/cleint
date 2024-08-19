import { theme } from "../../../style/theme";
import styled from "styled-components";

// Overlay 스타일 컴포넌트
export const BadgeWrapper = styled.span<{ color: string; textColor: string }>`
    display: inline-block;
    width: 7.5rem;

    // center
    text-align: center;
    border-radius: 1rem;
    background-color: ${({ color }) => color};
    color: ${({ textColor }) => textColor};
    font-weight: 600;
    ${theme.Fonts.Body2}
`;
