import SignInForm from "@components/auth/sign-in/sign-in-form/SignInForm";
import * as S from "./style";
import SignInLogo from "@components/auth/sign-in/sign-in-logo/SignInLogo.tsx";

interface props {
  onClick: () => void;
}

export default function SignIn(props: props) {
  return (
    <S.Container>
      <SignInLogo />
      <SignInForm onClick={props.onClick} />
    </S.Container>
  );
}
