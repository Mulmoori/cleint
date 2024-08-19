import React from "react";
import { theme } from "../../../style/theme";
import styled from "styled-components";

interface ModalInputProps {
    title: string;
    text: string
}

const ModalInputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    font-weight: 600;
    ${theme.Fonts.Body2}
`;

const ModalInputBox = styled.div`
    width: 100%;
    padding: 1.4rem;
    border-radius: 12px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid ${theme.Colors.gray};
    ${theme.Fonts.Sub2}
    // placeholder text size
`;
const ModalInputTitle = styled.p`
    ${theme.Fonts.Sub1}
    color : ${theme.Colors.neutral};
`;
const ModalInput: React.FC<ModalInputProps> = ({
    title,
    text
}) => {
    return (
        <ModalInputWrapper>
            <ModalInputTitle>{title}</ModalInputTitle>
            <ModalInputBox>{text}</ModalInputBox>
        </ModalInputWrapper>
    );
};

export default ModalInput;
