import React from "react";
import QuestionBox from "../questionBoxList/questionBox/questionBox";
import { ListContainer } from "./style";

interface QuestionData {
	title: string;
	content: string;
	timestamp: string;
	status: "답변 전" | "관리자 답변" | "AI답변";
}

interface QuestionBoxListProps {
	questions: QuestionData[];
}

const QuestionBoxList: React.FC<QuestionBoxListProps> = ({ questions }) => {
	return (
		<ListContainer>
			{questions.map((question, index) => (
				<QuestionBox
					key={index}
					title={question.title}
					content={question.content}
					timestamp={question.timestamp}
					status={question.status}
				/>
			))}
		</ListContainer>
	);
};

export default QuestionBoxList;
