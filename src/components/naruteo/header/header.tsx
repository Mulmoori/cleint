import React from "react";
import * as S from "./style";
import LogoImage from "../../../assets/fishing-float-2.svg";
import {useRecoilState} from "recoil";
import {narooteoState} from "../../../context/narooteoState.ts";
import instance from "../../../api/axios.ts";
import {useNavigate} from "react-router-dom";
import {Spacer} from "@components/common/spacer/style.ts";
import {SizedBox} from "@components/common/sized-box/style.ts";
import CopyButton from "../../../assets/icons/CopyButton.svg";

interface NarooteoProps {
	id: number;
	hostNickname: string;
	title: string;
	participationCode: string;
	isHost: boolean;
}

const Header: React.FC = (props: NarooteoProps) => {

	const narooteoId = useRecoilState(narooteoState);
	const navigate = useNavigate();

	const handleExit = async () => {
		try {
			const response = await instance.delete(`/api/v1/users/narooteos/${narooteoId}`);

			if (response.status === 204) {
				alert("나루터를 성공적으로 나가셨습니다.");
				navigate("/home");
			}
		} catch (error) {
			console.error(error);
		}
	}

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(props.participationCode);
			alert("복사되었습니다.");
		} catch (error) {
			console.error("Copy failed", error);
		}
	}

	return (
		<S.HeaderWrapper>
			<S.LeftSection>
				<S.Logo>
					<img src={LogoImage} alt="Mulmuli Logo" />
				</S.Logo>
				<S.Title>{props.hostNickname}님의 {props.title} 나루터</S.Title>
			</S.LeftSection>
			<Spacer flex={1} direction={"horizontal"}/>
			<S.ParticipantCode>{props.participationCode}</S.ParticipantCode>
			<SizedBox width={"12px"}/>
			<img src={CopyButton} onClick={handleCopy} alt="Copy Button" style={{cursor: "pointer"}}/>
			<Spacer flex={1} direction={"horizontal"}/>
			<S.ButtonContainer>
				<S.Button>자리 비우기</S.Button>
				<S.Button style={{ background: "var(--red-400, #FF6F60)" }} onClick={handleExit}>
					퇴장하기
				</S.Button>
			</S.ButtonContainer>
		</S.HeaderWrapper>
	);
};

export default Header;
