import React from "react";
import * as S from "./style";
import LogoImage from "../../assets/mainLogo.png";
import IconSVG from "../../assets/icons/profileIcon.svg";

const Navbar: React.FC = () => {
	return (
		<S.NavbarWrapper>
			<S.LeftSection />
			<S.CenterSection>
				<S.LogoContainer>
					<S.Logo>
						<img src={LogoImage} alt="Mulmuli Logo" />
					</S.Logo>
					<S.LogoText>MULMULI</S.LogoText>
				</S.LogoContainer>
			</S.CenterSection>
			<S.RightSection>
				<S.IconContainer>
					<img src={IconSVG} alt="Profile Icon" />
				</S.IconContainer>
			</S.RightSection>
		</S.NavbarWrapper>
	);
};

export default Navbar;
