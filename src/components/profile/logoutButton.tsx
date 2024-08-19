import React from "react";
import styled from "styled-components";
import { theme } from "../../style/theme"; // theme 파일의 경로를 적절히 조정해주세요

const StyledButton = styled.button`
	display: flex;
	margin-top: 250px;
	width: 360px;
	height: 68px;
	padding: 19px 0px;
	justify-content: center;
	align-items: center;
	border-radius: 34px;
	background: ${theme.Colors.primary};
	border: none;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background: ${theme.Colors.primary600};
	}

	&:active {
		background: ${theme.Colors.primary700};
	}

	color: #fff;
	text-align: center;
	font-family: SUIT, sans-serif;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 30px;
`;

interface CustomButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick }) => {
	const handleClick = () => {
		console.log("hi");
		if (onClick) onClick();
	};

	return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

export default CustomButton;
