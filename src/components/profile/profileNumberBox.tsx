import React from "react";
import * as S from "./style";

interface ProfileNumberBoxProps {
	title: string;
	number: number;
}

const ProfileNumberBox: React.FC<ProfileNumberBoxProps> = ({
	title,
	number,
}) => {
	return (
		<S.Container>
			<S.Title>{title}</S.Title>
			<S.NumberBox>
				<S.Number>{number}</S.Number>
			</S.NumberBox>
		</S.Container>
	);
};

export default ProfileNumberBox;
