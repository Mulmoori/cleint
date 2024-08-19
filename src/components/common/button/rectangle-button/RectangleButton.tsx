import * as Styled from "./style.ts"
import { theme } from "../../../../style/theme";

interface props {
    content: string;
    isIssued: boolean;
    onClick: () => void
}

export default function RectangleButton(props: props) {


    return (
        <Styled.Container
            backgroundColor={props.isIssued ? theme.Colors.primary : theme.Colors.neutral200}
            isIssued={props.isIssued}
            onClick={props.onClick}
        >
            <Styled.Text color={theme.Colors.white} textAlign={"center"}
                >{props.content}</Styled.Text>
        </Styled.Container>
    )
}