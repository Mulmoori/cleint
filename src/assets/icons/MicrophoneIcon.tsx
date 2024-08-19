import React from "react";
import styled from "styled-components";

interface MicrophoneIconProps {
	width?: string;
	height?: string;
	color?: string;
	onClick?: () => void;
}

const SvgWrapper = styled.div<MicrophoneIconProps>`
	width: ${({ width }) => width || "28px"};
	height: ${({ height }) => height || "28px"};
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		width: 100%;
		height: 100%;
	}

	path {
		stroke: ${({ color }) => color || "#9292A5"};
	}
`;

export const MicrophoneIcon: React.FC<MicrophoneIconProps> = ({
	width,
	height,
	color,
	onClick,
}) => {
	return (
		<SvgWrapper
			width={width}
			height={height}
			color={color}
			onClick={onClick}
		>
			<svg
				width="28"
				height="28"
				viewBox="0 0 28 28"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M22.1668 11.6666V13.9999C22.1668 18.5103 18.5105 22.1666 14.0002 22.1666M14.0002 22.1666C9.48984 22.1666 5.8335 18.5103 5.8335 13.9999V11.6666M14.0002 22.1666V25.6666M9.3335 25.6666H18.6668M14.0002 17.4999C12.0671 17.4999 10.5002 15.933 10.5002 13.9999V5.83325C10.5002 3.90026 12.0671 2.33325 14.0002 2.33325C15.9332 2.33325 17.5002 3.90026 17.5002 5.83325V13.9999C17.5002 15.933 15.9332 17.4999 14.0002 17.4999Z"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</SvgWrapper>
	);
};
