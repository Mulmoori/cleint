import { styled } from "styled-components";
import { theme } from "../../../../style/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 1080px;
  height: 100vh;
  width: 1160px;
  background-color: ${theme.Colors.neutral100};
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`;
