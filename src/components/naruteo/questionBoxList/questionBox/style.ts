import styled from "styled-components";

export const BoxContainer = styled.div`
	max-width: 600px;
	height: 192px;
	display: flex;
	padding: 20px;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	gap: 12px;
	align-self: stretch;
	border-radius: 12px;
	border: 1px solid var(--neutral-300, #d4d4e3);
	background: #fff;
	box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.1);
`;

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

export const LeftSection = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const Emoji = styled.span`
	font-size: 22px;
`;

export const Title = styled.h2`
	color: #000;
	font-family: Pretendard, sans-serif;
	font-size: 22px;
	font-style: normal;
	font-weight: 700;
	line-height: 27.5px;
`;

export const Content = styled.p`
	align-self: stretch;
	color: var(--neutral-700, #494976);
	font-family: Pretendard, sans-serif;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 20px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
`;

export const Timestamp = styled.span`
	align-self: flex-end;
	color: var(--neutral-500, #9292a5);
	font-family: Pretendard, sans-serif;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 20px;
`;
