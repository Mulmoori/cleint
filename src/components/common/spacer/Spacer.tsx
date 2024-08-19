import * as S from "./style.ts";

type Direction = "horizontal" | "vertical";

interface props {
  flex: number;
  direction: Direction;
}

export default function Spacer(props: props) {
  return <S.Spacer flex={props.flex} direction={props.direction} />;
}
