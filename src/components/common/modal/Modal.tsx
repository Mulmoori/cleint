import React, { ReactNode } from "react";
import * as S from "./style";
import { theme } from "../../../style/theme";

// CustomModal 컴포넌트 타입 정의
interface CustomModalProps {
    title: string;
    description: string;
    children?: ReactNode;
    onOk: () => void;
    onCancel: () => void;
    text1: string;
    text2: string;
    // joinCode?: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
    title,
    description,
    children,
    onOk,
    onCancel,
    text1,
    text2,
}) => {
    return (
        <S.Overlay onClick={onCancel}>
            <S.Container onClick={(e) => e.stopPropagation()}>
                <S.Title>{title}</S.Title>
                <S.Description>{description}</S.Description>
                {children}
                <S.ButtonContainer>
                    <S.StyledButton
                        onClick={onCancel}
                        textColorCode={theme.Colors.neutral}
                        colorCode={theme.Colors.neutral200}
                    >
                        {text2}
                    </S.StyledButton>
                    <S.StyledButton
                        onClick={onOk}
                        textColorCode={theme.Colors.white}
                        colorCode={theme.Colors.primary}
                    >
                        {text1}
                    </S.StyledButton>
                </S.ButtonContainer>
            </S.Container>
        </S.Overlay>
    );
};

export default CustomModal;
