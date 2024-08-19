import * as S from "./style.ts";

interface props {
  width?: string;
  height?: string;
}

export default function SizedBox(props: props) {
  return <S.SizedBox height={props.height} width={props.width} />;
}
