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

	@media (max-width: 768px) {
		padding: 15px 20px;
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const LeftSection = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;

	@media (max-width: 768px) {
		width: 100%;
		justify-content: space-between;
		margin-bottom: 15px;
	}
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

	@media (max-width: 1024px) {
		font-size: 28px;
		line-height: 28px;
	}

	@media (max-width: 768px) {
		font-size: 24px;
		line-height: 24px;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 10px;
	margin-left: auto;
	padding-left: 20px;

	@media (max-width: 768px) {
		width: 100%;
		margin-left: 0;
		padding-left: 0;
		justify-content: flex-end;
	}
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

	@media (max-width: 768px) {
		padding: 0px 15px;
		font-size: 14px;
	}
`;
