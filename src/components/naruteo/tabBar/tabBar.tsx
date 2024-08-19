import React, { useState } from "react";
import * as S from "./style";
import QuestionBoxList from "../questionBoxList/questionBoxList";

const generateDummyQuestions = (count: number) => {
	return Array(count)
		.fill(null)
		.map((_, index) => ({
			title: `무능한 하마 ${index + 1}`,
			content:
				"질문이 머예요? 먹는건가요? 저보고 하라고요? 어쩌라고요? 킹받죠? 질문이 머예요? 먹는건가요? 저보고 하라고요? 어쩌라고요? 킹받죠? 질문이 머예요? 먹는건가요? 저보고 하라고요? 어쩌라고요? 킹받죠? 질문이 머예요? 먹는건가요? 저보고 하라고요? 어쩌라고요? 킹받죠? 질문이 머예요? 먹는건가요? 저보고 하라고요? 어쩌라고요? 킹받죠? 질문이 머예요? 먹는건가요? 저보고 하라고요? 어쩌라고요? 킹받죠? 질문이 머예요? 먹는건가요? 저보고 하라고요? 어쩌라고요? 킹받...",
			timestamp: `${Math.floor(Math.random() * 60)}분 전 작성`,
			status: ["답변 전", "관리자 답변", "AI답변"][
				Math.floor(Math.random() * 3)
			],
		}));
};

const TabBar: React.FC = () => {
	const [activeTab, setActiveTab] = useState<"전체질문방" | "나의질문방">(
		"전체질문방"
	);

	const questions =
		activeTab === "전체질문방"
			? generateDummyQuestions(6)
			: generateDummyQuestions(4);

	return (
		<>
			<S.TabBarContainer>
				<S.Tab
					isActive={activeTab === "전체질문방"}
					onClick={() => setActiveTab("전체질문방")}
				>
					전체질문방
				</S.Tab>
				<S.Tab
					isActive={activeTab === "나의질문방"}
					onClick={() => setActiveTab("나의질문방")}
				>
					나의질문방
				</S.Tab>
			</S.TabBarContainer>
			<QuestionBoxList questions={questions} />
		</>
	);
};

export default TabBar;
