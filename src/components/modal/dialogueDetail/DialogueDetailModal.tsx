import React, { useState, useEffect, useRef, useCallback } from "react";
import * as S from "./style";
import DoubleRightChevron from "../../../assets/icons/DoubleRightChevron.svg";
import Microphone from "../../../assets/icons/Microphone.svg";
import SizedBox from "@components/common/sized-box/SizedBox.tsx";
import Badge from "@components/common/badge/Badge.tsx";
import { theme } from "../../../style/theme";
import { Spacer } from "@components/common/spacer/style.ts";
import useSpeechToText from "../../../hooks/useSpeechToText.ts";
import { MicrophoneIcon } from "../../../assets/icons/MicrophoneIcon.tsx";
import instance from "../../../api/axios.ts";
import {calculateTime} from "../../../utils/DateTimeUtils.ts";
import {Simulate} from "react-dom/test-utils";
import toggle = Simulate.toggle;

interface props {
	onClick: () => void;
	isVisible: boolean;
	dialogueId: number;
	userRandomName: string;
	isHost: boolean;
}

interface ResponseWrapper {
	id: number;
	question: string;
	asked_at: string;
	answer?: string;
	replied_at?: string;
	is_answered_by_llm?: string;
}

export default function DialogueDetailModal(props: props): any {
	const { transcript, listening, toggleListening } = useSpeechToText();

	const [questionDetail, setQuestionDetail] = useState<ResponseWrapper>();
	const [inputValue, setInputValue] = useState("");
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const fetchQuestionDetail = async () => {
		try {
			const response = await instance.get(`/api/v1/dialogues/${props.dialogueId}`);

			if (response.status === 200) {
				const data: ResponseWrapper = response.data.data;

				setQuestionDetail(data);
			}
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchQuestionDetail().then(r => r);
	}, []);

	useEffect(() => {
		if (transcript) {
			setInputValue((prev) => prev + (prev ? " " : "") + transcript);
		}
	}, [transcript]);

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto";
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
		}
	}, [inputValue]);

	const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputValue(e.target.value);
	};

	const handleAnswer = async () => {
		try {
			const response = await instance.put(`/api/v1/dialogues/${props.dialogueId}/answer`, {
				answer: inputValue,
				is_using_stt: true
			});

			if (response.status === 201) {
				alert("답변이 성공적으로 등록되었습니다.");
			}
		} catch (error) {
			console.error(error);
		}

		return (
			<S.Overlay>
				<S.Container isVisible={props.isVisible}>
					<S.SvgIcon
						src={DoubleRightChevron}
						alt="DoubleRightChevron"
						onClick={props.onClick}
						width={"32px"}
						height={"32px"}
					/>
					<SizedBox height={"40px"}/>
					<S.Row>
						<S.Title>🚀 ${props.userRandomName}</S.Title>
						<S.CreatedAt>{calculateTime(new Date(questionDetail.asked_at))}</S.CreatedAt>
					</S.Row>
					<SizedBox height={"20px"}/>
					<S.Content>{questionDetail.question}</S.Content>
					<SizedBox height={"40px"}/>
					<S.Line/>
					<SizedBox height={"40px"}/>
					{!props &&
						(questionDetail.answer != null ? (
							<>
								<S.Row>
									<Badge
										text={
											!questionDetail.is_answered_by_llm ? "관리자 답변" : "AI 답변"
										}
										color={
											!questionDetail.is_answered_by_llm
												? theme.Colors.primary
												: theme.Colors.green
										}
										textColor={theme.Colors.white}
									/>
									<S.CreatedAt>작성날짜: 2021-08-01</S.CreatedAt>
								</S.Row>
								<SizedBox height={"20px"}/>
								<S.Content>{questionDetail.answer}</S.Content>
							</>
						) : (
							<S.Empty>
								이전에 유사한 질문이 없었어요... 관리자가 답변을
								작성하기 전입니다...
							</S.Empty>
						))}

					{props.isHost && questionDetail.answer === null && (
						<>
							<S.InputContainer>
								<S.Input
									placeholder={"답변을 작성해주세요"}
									value={inputValue}
									onChange={handleInputChange}
								/>
							</S.InputContainer>
							<SizedBox height={"12px"}/>
							<S.ButtonContainer>
								<Spacer flex={1} direction={"horizontal"}/>
								<MicrophoneIcon
									width="24px"
									height="24px"
									color={
										listening
											? theme.Colors.green600
											: theme.Colors.neutral
									}
									onClick={toggleListening}
								/>
								<SizedBox width={"12px"}/>
								<S.AnswerButton onClick={handleAnswer}>답변하기</S.AnswerButton>
							</S.ButtonContainer>
						</>
					)}
				</S.Container>
			</S.Overlay>
		);
	}
}
