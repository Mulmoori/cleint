import React from "react";
import * as S from "./style";
import LogoImage from "../../../assets/fishing-float-2.svg";

const Header: React.FC = () => {
	return (
		<S.HeaderWrapper>
			<S.LeftSection>
				<S.Logo>
					<img src={LogoImage} alt="Mulmuli Logo" />
				</S.Logo>

				<S.Title>손형준님의 2024년도 자료구조와 실습 나루터</S.Title>
			</S.LeftSection>
			<S.ButtonContainer>
				<S.Button>자리 비우기</S.Button>
				<S.Button style={{ background: "var(--red-400, #FF6F60)" }}>
					퇴장하기
				</S.Button>
			</S.ButtonContainer>
		</S.HeaderWrapper>
	);
};

export default Header;
