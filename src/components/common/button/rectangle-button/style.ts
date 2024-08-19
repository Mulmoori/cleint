import styled from "styled-components";
import {theme} from "../../../../style/theme";

interface ContainerProps {
    backgroundColor: string;
    isIssued: boolean;
}

export const Container = styled.button<ContainerProps>`
    width: 180px;
    height: 60px;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 12px;
    border: none;

    display: flex;
    padding: 15px 24px;
    justify-content: center;
    align-items: center;

    // props.isIssued 일 때 cursor: pointer
    ${(props) => props.isIssued ? "cursor: pointer;" : ""};
`;

interface FontProps {
    color?: string;
    textAlign?: string;
    text?: string;
}

export const Text = styled.div<FontProps>`
    color: ${(props) => props.color || theme.Colors.black};
    ${({ theme }) => theme.Fonts.H1};
    text-align: ${(props) => props.textAlign || "center"};
    white-space: pre-wrap;
`;
