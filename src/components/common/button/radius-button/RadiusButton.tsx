import { theme } from "../../../../style/theme";
import * as Styled from "./style.ts";

interface ButtonProps {
  content: string;
  isValid: boolean;
  onClick?: () => void;
}

export default function RadiusButton(props: ButtonProps) {
  return (
    <Styled.Container
      onClick={props.onClick}
      isValid={props.isValid}
      backgroundColor={
        props.isValid ? theme.Colors.primary : theme.Colors.neutral200
      }
    >
      <Styled.Text
        color={theme.Colors.white}
        textAlign={"center"}
      >{props.content}</Styled.Text>
    </Styled.Container>
  );
}
