import React from "react";
import * as S from "./style";
import Tag from "@components/naruteo/tag/tag";

interface QuestionBoxProps {
	title: string;
	content: string;
	timestamp: string;
	status: string;
}

const emojis = ["🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷"];

const QuestionBox: React.FC<QuestionBoxProps> = ({
	title,
	content,
	timestamp,
	status,
}) => {
	const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

	return (
		<S.BoxContainer>
			<S.TitleContainer>
				<S.LeftSection>
					<S.Emoji>{randomEmoji}</S.Emoji>
					<S.Title>{title}</S.Title>
				</S.LeftSection>
				<Tag type={status} />
			</S.TitleContainer>
			<S.Content>{content}</S.Content>
			<S.Timestamp>{timestamp}</S.Timestamp>
		</S.BoxContainer>
	);
};

export default QuestionBox;
