import React, {useEffect, useState} from "react";
import * as S from "./style";
import QuestionBoxList from "../questionBoxList/questionBoxList";
import instance from "../../../api/axios.ts";
import {useRecoilState} from "recoil";
import {narooteoState} from "../../../context/narooteoState.ts";
import SizedBox from "@components/common/sized-box/SizedBox.tsx";

interface props {
	isHost: boolean;
	id: number;
}

interface ResponseWrapper {
	id: number;
	user_random_name: string;
	status: string;
	question: string;
	asked_at: string;
}

export default function TabBar(props: props) {

	const [inputValue, setInputValue] = useState<string>("");

	const [questions, setQuestions] = useState<ResponseWrapper[]>([]);

	const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputValue(e.target.value);
	}

	const fetchTotalQuestions = async () => {
		try {
			const response = await instance.get(`/api/v1/narooteos/${props.id}/dialogues`);

			if (response.status === 200) {
				const data: ResponseWrapper[] = response.data.data.overviews;

				const questionsData = data.map((question) => ({
					id: question.id,
					user_random_name: question.user_random_name,
					status: question.status,
					question: question.question,
					asked_at: question.asked_at
				}));

				setQuestions(questionsData);
			}
		} catch (error) {
			console.error(error);
		}
	}

	const submitQuestion = async () => {
		try {
			const response = await instance.post('/api/v1/dialogues',
				{
					narooteo_id: props.id,
					question: inputValue
				});

			if (response.status === 201) {
				alert("질문이 성공적으로 등록되었습니다.");
			}
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchTotalQuestions().then(r => r);
	}, []);

	return (
		<>
			<SizedBox height={"40px"} />
			<S.TabBarContainer>
				{
					!props.isHost && (
						<S.InputContainer>
							<S.Input
								placeholder={"질문을 작성해주세요"}
								value={inputValue}
								onChange={handleInputChange}
							/>
							<button onClick={submitQuestion}>질문</button>
						</S.InputContainer>
					)
				}
			</S.TabBarContainer>
			<QuestionBoxList questions={questions} isHost={props.isHost}/>
		</>
	);
};
