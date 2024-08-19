import * as S from "./style";
import SignUpForm from "@components/auth/sign-up/sign-up-form/SignUpForm.tsx";
import SignUpLogo from "@components/auth/sign-up/sign-up-logo/SignUpLogo.tsx";

interface props {
  onClick: () => void;
}

export default function SignUp(props: props) {
  return (
    <S.Container>
      <SignUpLogo onClick={props.onClick} />
      <SignUpForm />
    </S.Container>
  );
}
