import styled from "styled-components";
import {theme} from "../../../style/theme.ts";

export const TabBarContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 76px;
	background: var(--white, #fff);
	
	align-items: center;
`;

interface TabProps {
	isActive: boolean;
}

export const Tab = styled.div<TabProps>`
	display: flex;
	width: 50%;
	height: 76px;
	padding: 12px 0px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	border-bottom: 2px solid
		${(props) =>
			props.isActive
				? "var(--neutral-400, #B7B7C9)"
				: "var(--neutral-200, #EAEAF6)"};
	background: var(--white, #fff);
	cursor: pointer;

	color: var(--neutral-700, #494976);
	font-family: Pretendard, sans-serif;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 30px;

	&:hover {
		background: var(--neutral-100, #f5f5ff);
	}
`;


export const InputContainer = styled.div`
	display: flex;
	border: 1px solid ${theme.Colors.neutral300};
	
	width: 600px;
	height: 120px;

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