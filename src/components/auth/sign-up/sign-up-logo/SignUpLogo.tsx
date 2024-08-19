import * as S from "./style";
import SizedBox from "@components/common/sized-box/SizedBox.tsx";
import ArrowLeft from "@components/auth/sign-up/sign-up-logo/arrow-left/ArrowLeft.tsx";
import SingUpSvg from "../../../../assets/icons/SignUp.svg";

interface props {
  onClick: () => void;
}

export default function SignUpLogo(props: props) {
  return (
    <S.Container>
      <SizedBox width={"760px"} height={"32px"} />
      <S.Arrow>
        <ArrowLeft onClick={props.onClick} />
      </S.Arrow>
      <S.Logo>
        <img src={SingUpSvg} alt="SingUpSvg" />
      </S.Logo>
    </S.Container>
  );
}
