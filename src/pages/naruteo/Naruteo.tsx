import Header from "@components/naruteo/header/header";
import * as S from "./style";
import TabBar from "@components/naruteo/tabBar/tabBar";

export default function Naruteo(): JSX.Element {
	return (
		<S.PageWrapper>
			<Header />
			<TabBar />
		</S.PageWrapper>
	);
}
