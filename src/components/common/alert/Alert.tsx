import React from "react";
import { theme } from "../../../style/theme";
import * as S from "./style";

// CustomModal 컴포넌트 타입 정의
interface CustomModalProps {
    description: string;
    onOk: () => void;
    text: string;
    // joinCode?: string;
}

const CustomAlert: React.FC<CustomModalProps> = ({
    description,
    onOk,
    text,
}) => {
    return (
        <S.Overlay onClick={onOk}>
            <S.Container onClick={(e) => e.stopPropagation()}>
                <S.Description>{description}</S.Description>
                <S.ButtonContainer>
                    <S.StyledButton
                        onClick={onOk}
                        textColorCode={theme.Colors.white}
                        colorCode={theme.Colors.primary}
                    >
                        {text}
                    </S.StyledButton>
                </S.ButtonContainer>
            </S.Container>
        </S.Overlay>
    );
};

export default CustomAlert;
