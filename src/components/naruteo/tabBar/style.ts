import styled from "styled-components";

export const TabBarContainer = styled.div`
	display: flex;
	width: 100%;
	height: 76px;
	background: var(--white, #fff);
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
