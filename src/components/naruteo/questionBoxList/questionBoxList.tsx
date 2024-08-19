import React, { useState } from "react";
import QuestionBox from "../questionBoxList/questionBox/questionBox";
import DialogueDetailModal from "../../modal/dialogueDetail/DialogueDetailModal";
import { ListContainer } from "./style";

interface QuestionData {
	id: number;
	user_random_name: string;
	status: string;
	question: string;
	asked_at: string;
}

interface QuestionBoxListProps {
	questions: QuestionData[];
	isHost: boolean;
}

const QuestionBoxList: React.FC<QuestionBoxListProps> = ({ questions, isHost }) => {
	const [selectedQuestion, setSelectedQuestion] =
		useState<QuestionData | null>(null);
	const [isModalVisible, setIsModalVisible] = useState(false);

	const [dialogueId, setDialogueId] = useState<number | null>(null);

	const handleQuestionClick = (question: QuestionData) => {
		setSelectedQuestion(question);
		setIsModalVisible(true);
		setDialogueId(question.id);
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
						title={question.user_random_name}
						content={question.question}
						timestamp={question.asked_at}
						status={question.status}
						onClick={() => handleQuestionClick(question)}
					/>
				))}
			</ListContainer>
			{selectedQuestion && (
				<DialogueDetailModal
					isHost={isHost}
					userRandomName={selectedQuestion.user_random_name}
					isVisible={isModalVisible}
					onClick={handleCloseModal}
					dialogueId={dialogueId}
				/>
			)}
		</>
	);
};

export default QuestionBoxList;
