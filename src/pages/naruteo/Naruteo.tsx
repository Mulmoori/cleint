import Header from "@components/naruteo/header/header";
import * as S from "./style";
import TabBar from "@components/naruteo/tabBar/tabBar";
import {useEffect, useState} from "react";
import instance from "../../api/axios.ts";
import {useParams} from "react-router-dom";

interface NarooteoProps {
	id: number;
	hostNickname: string;
	title: string;
	participationCode: string;
	isHost: boolean;
}

export default function Naruteo(): JSX.Element {

	const { id } = useParams();
	const [narooteo, setNarooteo] = useState<NarooteoProps>({
		id: 0,
		hostNickname: "",
		title: "",
		participationCode: "",
		isHost: false
	});

	const [loading, setLoading] = useState<boolean>(true);

	const fetchNarooteo = async () => {
		try {
			const response = await instance.get(`/api/v1/narooteos/${id}/summaries`);

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
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchNarooteo().then(r => r);
	}, []);

	if (loading) {
		return <S.PageWrapper>
		</S.PageWrapper>;
	}

	return (
		<S.PageWrapper>
			<Header hostNickname={narooteo.hostNickname} id={narooteo.id} isHost={narooteo.isHost} participationCode={narooteo.participationCode} title={narooteo.title}/>
			<TabBar id={narooteo.id} isHost={narooteo.isHost} />
		</S.PageWrapper>
	);
}
