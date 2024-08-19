import { styled } from "styled-components";
import { theme } from "../../style/theme";

/**
 * PageWrapper
 *
 * 해당 페이지의 기본 레이아웃을 정의하는 컴포넌트입니다.
 *
 * - 배경색과 텍스트 색상을 테마에 맞게 설정합니다.
 * - 페이지를 가운데 정렬하고, 최소 높이를 100vh로 설정하여 전체 화면을 채우도록 합니다.
 *
 * 이 스타일은 기본 템플릿으로, 필요에 따라 자유롭게 수정할 수 있습니다.
 */
export const PageWrapper = styled.div`
  /* 페이지 배경색 설정 */
  background-color: ${theme.Colors.background};

  /* 텍스트 색상 설정 */
  color: ${theme.Colors.text};

  /* 페이지  양옆 마진 16px  */
  margin: 0 1rem;

  /* 페이지 높이를 최소 100vh로 설정 */
  min-height: 100vh;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
