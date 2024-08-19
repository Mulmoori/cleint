import styled from "styled-components";
import { theme } from "../../../../style/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 1080px;
  min-width: 760px;

  width: 100vw;
  height: 100vh;

  margin: 0 0 auto auto;

  background-color: ${theme.Colors.neutral100};
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Arrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  position: relative;
  padding-left: 32px;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`;
