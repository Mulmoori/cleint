import styled from "styled-components";
import { theme } from "../../../../style/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
`;

interface FontProps {
  color?: string;
  textalign?: string;
  text?: string;
}

export const Text = styled.div<FontProps>`
  color: ${(props) => props.color || theme.Colors.black};
  ${theme.Fonts.H6};
  text-align: ${(props) => props.textalign || "center"};
  white-space: pre-wrap;
`;
