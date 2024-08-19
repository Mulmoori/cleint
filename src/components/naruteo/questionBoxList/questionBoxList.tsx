import React, { useState } from "react";
import QuestionBox from "../questionBoxList/questionBox/questionBox";
import DialogueDetailModal from "../../modal/dialogueDetail/DialogueDetailModal";
import { ListContainer } from "./style";

interface QuestionData {
	title: string;
	content: string;
	timestamp: string;
	status: string;
}

interface QuestionBoxListProps {
	questions: QuestionData[];
}

const QuestionBoxList: React.FC<QuestionBoxListProps> = ({ questions }) => {
	const [selectedQuestion, setSelectedQuestion] =
		useState<QuestionData | null>(null);
	const [isModalVisible, setIsModalVisible] = useState(false);

	const handleQuestionClick = (question: QuestionData) => {
		setSelectedQuestion(question);
		setIsModalVisible(true);
	};

	const handleCloseModal = () => {
		setIsModalVisible(false);
		setSelectedQuestion(null);
	};

	return (
		<>
			<ListContainer>
				{questions.map((question, index) => (
					<QuestionBox
						key={index}
						title={question.title}
						content={question.content}
						timestamp={question.timestamp}
						status={question.status}
						onClick={() => handleQuestionClick(question)}
					/>
				))}
			</ListContainer>
			{selectedQuestion && (
				<DialogueDetailModal
					isVisible={isModalVisible}
					onClick={handleCloseModal}
					question={selectedQuestion}
				/>
			)}
		</>
	);
};

export default QuestionBoxList;
