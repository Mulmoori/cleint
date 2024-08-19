import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 400px;
	width: 100%;
	margin: 0 0;

	@media (max-width: 768px) {
		max-width: 100%;
	}
`;

export const Title = styled.h1`
	color: var(--neutral-500, #9292a5);
	font-family: Pretendard, sans-serif;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 30px;
	margin-bottom: 12px;
`;

export const NumberBox = styled.div`
	display: flex;
	height: 160px;
	padding: 65px 0;
	justify-content: center;
	align-items: center;
	gap: 10px;
	align-self: stretch;
	border-radius: 12px;
	background: var(--neutral-200, #eaeaf6);
`;

export const Number = styled.span`
	color: #000;
	text-align: center;
	font-family: Pretendard, sans-serif;
	font-size: 48px;
	font-style: normal;
	font-weight: 700;
	line-height: 48px;
`;
