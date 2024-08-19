import styled from "styled-components";
import { theme } from "../../../../style/theme";

export const Container = styled.div`
  height: 1080px;
  width: 1160px;
  display: flex;
  justify-content: start;
  flex-direction: column;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 71px;
`;

export const Title = styled.div`
  display: flex;
  width: 600px;
  height: 60px;
  font-size: 3rem;
  color: ${theme.Colors.black};
  font-family: SUIT, serif;
  font-style: normal;
  font-weight: 700;
  line-height: 60px; /* 125% */
`;

export const SignUpTextContainer = styled.div`
  font-size: 1rem;
  color: ${theme.Colors.black};
`;

export const SignUpLink = styled.a`
  color: ${theme.Colors.black};
  text-decoration: underline;
  text-underline-offset: 3px;
`;

export const Email = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 1018px;
`;

export const AtMark = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  padding-left: 12px;
  padding-right: 12px;
  align-items: center;
  justify-content: center;
`;

export const AuthCode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 1018px;
`;
