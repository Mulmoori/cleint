import Header from "@components/naruteo/header/header";
import * as S from "./style";
import TabBar from "@components/naruteo/tabBar/tabBar";
import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {narooteoState} from "../../context/narooteoState.ts";
import instance from "../../api/axios.ts";

interface NarooteoProps {
	id: number;
	hostNickname: string;
	title: string;
	participationCode: string;
	isHost: boolean;
}

export default function Naruteo(): JSX.Element {

	const narooteoId = useRecoilState(narooteoState);
	const [narooteo, setNarooteo] = useState<NarooteoProps>({
		id: 0,
		hostNickname: "",
		title: "",
		participationCode: "",
		isHost: false
	});

	const fetchNarooteo = async () => {
		try {
			const response = await instance.get(`/api/v1/narooteos/${narooteoId}/summaries`);

			if (response.status === 200) {
				setNarooteo({
					id: response.data.data.id,
					hostNickname: response.data.data.host_nickname,
					title: response.data.data.title,
					participationCode: response.data.data.participation_code,
					isHost: response.data.data.is_host
				});
			}
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchNarooteo().then(r => r);
	}, []);

	return (
		<S.PageWrapper>
			<Header />
			<TabBar />
		</S.PageWrapper>
	);
}
