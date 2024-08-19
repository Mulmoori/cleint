import * as S from "./style.ts";
import ArrowLeftSvg from "../../../../../assets/icons/AllowLeft.svg";

interface props {
  onClick: () => void;
}

export default function ArrowLeft(props: props) {
  return (
    <S.Container onClick={props.onClick}>
      <img src={ArrowLeftSvg} alt="arrowLeft" />
    </S.Container>
  );
}
