import { theme } from "../../../../style/theme";
import styled from "styled-components";

interface ContainerProps {
  backgroundColor: string;
  isValid: boolean;
}

export const Container = styled.button<ContainerProps>`
  width: 360px;
  height: 68px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 34px;
  border: none;

  display: flex;
  padding: 19px 0;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  cursor: ${(props) => (props.isValid ? "pointer" : "default")};
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
