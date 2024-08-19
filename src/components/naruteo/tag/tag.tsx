import React from "react";
import styled from "styled-components";
import { theme } from "../../../style/theme";

interface TagProps {
	type: string;
}

const TagContainer = styled.span<TagProps>`
	padding: 4px 8px;
	border-radius: 4px;
	font-size: 12px;
	font-weight: 500;
	width: 7.5rem;
	text-align: center;
	border-radius: 1rem;

	${({ type }) => {
		switch (type) {
			case "답변 전":
				return `
          background-color: ${theme.Colors.neutral300};
          color: ${theme.Colors.neutral};
        `;
			case "관리자 답변":
				return `
          background-color: ${theme.Colors.primary};
          color: ${theme.Colors.white};
        `;
			case "AI답변":
				return `
          background-color: ${theme.Colors.green};
          color: ${theme.Colors.white};
        `;
		}
	}}
`;

const Tag: React.FC<TagProps> = ({ type }) => {
	return <TagContainer type={type}>{type}</TagContainer>;
};

export default Tag;
