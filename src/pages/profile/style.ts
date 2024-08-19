import styled from "styled-components";
import { theme } from "../../style/theme"; // theme 파일의 경로를 적절히 조정해주세요

export const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center; // 내부 컨텐츠를 가로축 중앙 정렬
	padding: 40px 20px; // 상하 패딩도 통일
	max-width: 832px;
	margin: 0 auto;
	width: 100%;
	background-color: ${theme.Colors.background};
`;
export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
`;

export const WelcomeText = styled.h1`
	color: #000;
	font-family: Pretendard, sans-serif;
	font-size: 48px;
	font-style: normal;
	font-weight: 700;
	line-height: 60px;
	margin-bottom: 32px;
	text-align: left;
	padding-left: 0;

	@media (max-width: 768px) {
		font-size: 36px;
		line-height: 45px;
	}
`;

export const StatsContainer = styled.div`
	display: flex;
	gap: 32px;
	width: 100%;
	justify-content: flex-start;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		align-content: center;
	}
`;

export const StyledProfileNumberBox = styled.div`
	width: 100%;
	max-width: 400px;

	@media (max-width: 768px) {
		max-width: 100%;
	}
`;
