import * as S from "./style";
import { theme } from "../../../../style/theme.ts";

interface props {
  text?: string;
}

export default function Label(props: props) {
  return (
    <S.Container>
      <S.Text color={theme.Colors.neutral} textalign={"left"}>
        {props.text}
      </S.Text>
    </S.Container>
  );
}
