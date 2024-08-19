import React from "react";
import * as S from "./style";

interface BadgeProps {
    text: string;
    color: string;
    textColor: string;
}

const Badge: React.FC<BadgeProps> = ({ text, color, textColor }) => {
    return (
        <S.BadgeWrapper color={color} textColor={textColor}>
            {text}
        </S.BadgeWrapper>
    );
};

export default Badge;
