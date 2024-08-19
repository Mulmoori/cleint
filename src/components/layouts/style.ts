import styled from "styled-components";

export const NavbarWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 60px;
	height: 128px;
	background-color: #fff;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	border-bottom: 1.333px rgba(195, 212, 233, 0.4);
`;

export const LeftSection = styled.div`
	flex: 1;
`;

export const CenterSection = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
`;

export const RightSection = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
`;

export const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Logo = styled.div`
	width: 160.449px;
	height: 51.9px;
	margin-bottom: 8px;
	img {
		width: 100%;
		height: 100%;
	}
`;

export const LogoText = styled.div`
	color: #000;
	text-align: center;
	font-family: Pretendard, sans-serif;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 20px;
`;

export const IconContainer = styled.div`
	display: flex;
	align-items: center;
	img {
		width: 58.667px;
		height: 58.667px;
	}
`;

export const HamburgerIcon = styled.div`
	display: none;
	font-size: 24px;
	cursor: pointer;

	@media (max-width: 768px) {
		display: block;
	}
`;

interface MenuProps {
	isOpen: boolean;
}

export const Menu = styled.ul<MenuProps>`
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;

	@media (max-width: 768px) {
		display: ${({ isOpen }) => (isOpen ? "block" : "none")};
		position: absolute;
		top: 60px;
		right: 0;
		background-color: white;
		width: 100%;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
		border-radius: 8px;
	}
`;

export const MenuItem = styled.li`
	padding: 10px 20px;
	cursor: pointer;

	&:hover {
		background-color: #f1f1f1;
	}

	@media (max-width: 768px) {
		padding: 15px 20px;
		border-bottom: 1px solid #eaeaea;

		&:last-child {
			border-bottom: none;
		}
	}
`;
