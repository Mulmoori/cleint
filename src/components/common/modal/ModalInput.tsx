import React from "react";
import { theme } from "../../../style/theme";
import styled from "styled-components";

interface ModalInputProps {
    title: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalInputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    font-weight: 600;
    ${theme.Fonts.Body2}
`;

const ModalContent = styled.div`
    width: 100%;
    padding: 1.4rem;
    border-radius: 12px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid ${theme.Colors.gray};
    ${theme.Fonts.Sub2}
    // placeholder text size
`;

const ModalInputBox = styled.input`
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
    placeholder,
    value,
    onChange,
}) => {
    return (
        <ModalInputWrapper>
            <ModalInputTitle>{title}</ModalInputTitle>
            <ModalInputBox placeholder={placeholder} value={value} onChange={onChange}/>
        </ModalInputWrapper>
    );
};

export default ModalInput;

interface ModalContentProps {
    title: string;
    text: string;
}

export function ModalContentDiv(props: ModalContentProps) {
    return (
        <ModalInputWrapper>
            <ModalInputTitle>{props.title}</ModalInputTitle>
            <ModalContent>{props.text}</ModalContent>
        </ModalInputWrapper>
    )
}