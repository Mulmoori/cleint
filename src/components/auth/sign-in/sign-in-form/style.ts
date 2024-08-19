import styled from "styled-components";
import { theme } from "../../../../style/theme.ts";

export const Container = styled.div`
	height: 1080px;
	width: 720px;
	display: flex;
	justify-content: start;
	align-items: center;
	flex-direction: column;
`;

export const Form = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 80px;
	padding-right: 80px;
`;

export const Title = styled.div`
	display: flex;
	width: 600px;
	height: 60px;
	font-size: 3rem;
	color: ${theme.Colors.black};
	font-family: Pretendard, serif;
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

	cursor: pointer;

	&:hover {
		color: ${theme.Colors.black};
		font-weight: bold;
	}
`;
