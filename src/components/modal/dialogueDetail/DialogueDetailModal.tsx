import React, { useState, useEffect, useRef } from "react";
import * as S from "./style";
import DoubleRightChevron from "../../../assets/icons/DoubleRightChevron.svg";
import Microphone from "../../../assets/icons/Microphone.svg";
import SizedBox from "@components/common/sized-box/SizedBox.tsx";
import Badge from "@components/common/badge/Badge.tsx";
import { theme } from "../../../style/theme";
import { Spacer } from "@components/common/spacer/style.ts";
import useSpeechToText from "../../../hooks/useSpeechToText.ts";

interface props {
	onClick: () => void;
	isVisible: boolean;
}

export default function DialogueDetailModal(props: props) {
	const { transcript, listening, toggleListening } = useSpeechToText();
	const [inputValue, setInputValue] = useState("");
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const content =
		"질문이 머예요? 먹는건가요? 저보고 하라고요? 어쩌라고요? 킹받죠? ..."; // 긴 내용 생략
	const adminAnswer = false;
	const isAnswered = false;
	const isAdmin = true;
	const answer =
		"질문이 머예요? 먹는건가요? 저보고 하라고요? 어쩌라고요? 킹받죠? ..."; // 긴 내용 생략

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
				<SizedBox height={"40px"} />
				<S.Row>
					<S.Title>🚀 대화 상세</S.Title>
					<S.CreatedAt>참여날짜: 2021-08-01</S.CreatedAt>
				</S.Row>
				<SizedBox height={"20px"} />
				<S.Content>{content}</S.Content>
				<SizedBox height={"40px"} />
				<S.Line />
				<SizedBox height={"40px"} />
				{!isAdmin &&
					(isAnswered ? (
						<>
							<S.Row>
								<Badge
									text={
										adminAnswer ? "관리자 답변" : "AI 답변"
									}
									color={
										adminAnswer
											? theme.Colors.primary
											: theme.Colors.green
									}
									textColor={theme.Colors.white}
								/>
								<S.CreatedAt>작성날짜: 2021-08-01</S.CreatedAt>
							</S.Row>
							<SizedBox height={"20px"} />
							<S.Content>{answer}</S.Content>
						</>
					) : (
						<S.Empty>
							이전에 유사한 질문이 없었어요... 관리자가 답변을
							작성하기 전입니다...
						</S.Empty>
					))}

				{isAdmin && !isAnswered && (
					<>
						<S.InputContainer>
							<S.Input
								ref={textareaRef}
								placeholder={"답변을 작성해주세요"}
								value={inputValue}
								onChange={handleInputChange}
							/>
						</S.InputContainer>
						<SizedBox height={"12px"} />
						<S.ButtonContainer>
							<Spacer flex={1} direction={"horizontal"} />
							<S.SvgIcon
								src={Microphone}
								alt="Microphone"
								width={"24px"}
								height={"24px"}
								color={
									listening
										? theme.Colors.green600
										: theme.Colors.neutral
								}
								onClick={toggleListening}
							/>
							<SizedBox width={"12px"} />
							<S.AnswerButton>답변하기</S.AnswerButton>
						</S.ButtonContainer>
					</>
				)}
			</S.Container>
		</S.Overlay>
	);
}
