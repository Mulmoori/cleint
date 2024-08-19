import styled, { css, keyframes } from "styled-components";
import { theme } from "../../../style/theme";

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9990;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOutToRight = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const SvgIcon = styled.img<{ width: string; height: string }>`
	width: ${({ width }) => width};
	height: ${({ height }) => height};

	cursor: pointer;
`;

export const Container = styled.div<{ isVisible: boolean }>`
	width: 600px;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 16px;

	background-color: ${theme.Colors.white};

	position: relative;
	right: 0;
	animation: ${({ isVisible }) =>
		isVisible
			? css`
					${slideInFromRight} 0.5s ease forwards
			  `
			: css`
					${slideOutToRight} 0.5s ease forwards
			  `};

	box-shadow: 0px 2px 6px 0px rgba(98, 98, 114, 0.2);
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Title = styled.h2`
	${theme.Fonts.H2};
`;

export const CreatedAt = styled.p`
	${theme.Fonts.Sub3};
	color: ${theme.Colors.neutral};
`;

export const Content = styled.p`
	${theme.Fonts.Sub2};
`;

export const Line = styled.div`
	width: 100%;
	height: 2px;
	background-color: ${theme.Colors.neutral200};
`;

export const Empty = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${theme.Colors.neutral};

	border-radius: 12px;

	background-color: ${theme.Colors.neutral100};

	${theme.Fonts.Sub2};
`;

export const InputContainer = styled.div`
	display: flex;
	border: 1px solid ${theme.Colors.neutral300};

	border-radius: 12px;
`;

export const Input = styled.textarea`
	width: 100%;
	padding: 20px;
	font-size: 14px;
	box-sizing: border-box;
	border: none;
	outline: none;
	resize: none;
	overflow: hidden;
	min-height: 80px;
	line-height: 1.5;

	&:focus,
	&:not(:placeholder-shown) {
		height: auto;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;

	justify-content: center;
	align-items: center;
`;

export const AnswerButton = styled.button`
	width: 80px;
	height: 28px;

	padding: 4px 12px;

	border: none;

	${theme.Fonts.Sub1};

	color: ${theme.Colors.white};
	background-color: ${theme.Colors.primary};

	border-radius: 4px;

	cursor: pointer;
`;
