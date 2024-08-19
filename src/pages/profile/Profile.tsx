import React, {useEffect, useState} from "react";
import * as S from "./style";
import ProfileNumberBox from "@components/profile/profileNumberBox"; // 경로는 실제 위치에 맞게 조정해주세요
import CustomButton from "@components/profile/logoutButton";
import instance from "../../api/axios.ts"; // 경로는 실제 위치에 맞게 조정해주세요

interface ProfileProps {
	nickname: string,
	participantNarooteoCount: number;
	participantDialogueCount: number
}

export default function Profile(): JSX.Element {

	const [profile, setProfile] = useState<ProfileProps>({
		nickname: "",
		participantNarooteoCount: 0,
		participantDialogueCount: 0
	});

	const fetchProfile = async () => {
		try {
			const response = await instance.get("/api/v1/users");

			if (response.status === 200) {
				setProfile({
					nickname: response.data.data.nickname,
					participantNarooteoCount: response.data.data.participant_narooteo_count,
					participantDialogueCount: response.data.data.participant_dialogue_count
				})
			}
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchProfile().then(r => r);
	}, []);

	return (
		<S.PageWrapper>
			<S.ContentWrapper>
				<S.WelcomeText>{profile.nickname}님 환영합니다</S.WelcomeText>
				<S.StatsContainer>
					<S.StyledProfileNumberBox>
						<ProfileNumberBox
							title="내가 참여한 나루터수"
							number={profile.participantNarooteoCount}
						/>
					</S.StyledProfileNumberBox>
					<S.StyledProfileNumberBox>
						<ProfileNumberBox
							title="내가 작성한 물음수"
							number={profile.participantDialogueCount}
						/>
					</S.StyledProfileNumberBox>
				</S.StatsContainer>
				<S.ButtonContainer>
					<CustomButton>로그아웃</CustomButton>
				</S.ButtonContainer>
			</S.ContentWrapper>
		</S.PageWrapper>
	);
}
