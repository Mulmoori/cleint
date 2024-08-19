import React from "react";
import * as S from "./style";
import ProfileNumberBox from "@components/profile/profileNumberBox"; // 경로는 실제 위치에 맞게 조정해주세요

export default function Profile(): JSX.Element {
	return (
		<S.PageWrapper>
			<S.ContentWrapper>
				<S.WelcomeText>손형준님 환영합니다</S.WelcomeText>
				<S.StatsContainer>
					<S.StyledProfileNumberBox>
						<ProfileNumberBox
							title="내가 참여한 나루터수"
							number={10}
						/>
					</S.StyledProfileNumberBox>
					<S.StyledProfileNumberBox>
						<ProfileNumberBox
							title="내가 작성한 물음수"
							number={10}
						/>
					</S.StyledProfileNumberBox>
				</S.StatsContainer>
			</S.ContentWrapper>
		</S.PageWrapper>
	);
}
