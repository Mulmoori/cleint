import React from "react";
import { theme } from "../../style/theme";
import styled from "styled-components";

interface BadgeProps {
    text: string;
    color: string;
    textColor: string;
}

const BadgeWrapper = styled.span<{ color: string; textColor: string }>`
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

const Badge: React.FC<BadgeProps> = ({ text, color, textColor }) => {
    return (
        <BadgeWrapper color={color} textColor={textColor}>
            {text}
        </BadgeWrapper>
    );
};

export default Badge;
