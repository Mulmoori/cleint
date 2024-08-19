import * as S from "./style";
import SignInSvg from "../../../../assets/icons/SignIn.svg";

export default function SignInLogo() {
  return (
    <S.Container>
      <S.Logo>
        <img src={SignInSvg} alt="SignInSvg" />
      </S.Logo>
    </S.Container>
  );
}
