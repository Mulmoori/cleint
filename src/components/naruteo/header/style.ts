import styled from "styled-components";

export const HeaderWrapper = styled.header`
	display: flex;
	width: 100%;
	max-width: 1920px;
	padding: 20px 60px;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1.333px solid var(--neutral-200, #eaeaf6);
	background: var(--Primary-0, #fff);
`;

export const LeftSection = styled.div`
	display: flex;
	align-items: center;
	gap: 20px; // SVG와 텍스트 사이의 간격
`;

export const Logo = styled.div`
	width: 36px;
	height: 36px;
	img {
		width: 100%;
		height: 100%;
	}
`;

export const Title = styled.h1`
	color: #000;
	font-family: Pretendard, sans-serif;
	font-size: 36px;
	font-style: normal;
	font-weight: 700;
	line-height: 36px;
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 10px;
	margin-left: auto; // 버튼을 오른쪽으로 밀어냄
	padding-left: 20px; // 왼쪽 요소들과의 간격
`;

export const Button = styled.button`
	display: flex;
	height: 36px;
	padding: 0px 20px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 12px;
	background: var(--primary-500, #5891eb);
	border: none;
	cursor: pointer;
	color: #fff;
	font-family: Pretendard, sans-serif;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 20px;
`;
