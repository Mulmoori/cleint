import { useState } from "react";
import * as S from "./style";
import CustomModal from "@components/common/modal/Modal";
import ModalInput from "@components/common/modal/ModalInput";
import CustomAlert from "@components/common/alert/Alert";
import instance from "../../../api/axios.ts";
import {useRecoilState} from "recoil";
import {narooteoBriefState, narooteoState} from "../../../context/narooteoState.ts";
import {useNavigate} from "react-router-dom";

interface JoinState {
    joinCode: string;
    name: string;
}

export default function HomeSearch(): JSX.Element {
    const [search, setSearch] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalType, setModalType] = useState<"create" | "join" | null>(null);
    const [roomName, setRoomName] = useState<string>("");
    const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>("");

    const [joinState, setJoinState] = useState<JoinState>({
        joinCode: "",
        name: "",
    });

    const [narooteoBrief, setNarooteoBrief] = useRecoilState(narooteoBriefState);
    const [narooteoId, setNarooteoId] = useRecoilState(narooteoState);
    const navigate = useNavigate();

    const alertOpen = (message: string) => {
        setAlertMessage(message);
        setIsAlertOpen(true);
    };

    const alertClose = () => {
        setIsAlertOpen(false);
        setAlertMessage("");
    };

    const openModal = async (type: "create" | "join") => {
        try {
            const response = await instance.get(`/api/v1/narooteos/briefs?participationCode=${search}`);

            if (response.status===200) {
                setNarooteoBrief({
                    id: response.data.data.id,
                    title: response.data.data.title,
                    hostNickname: response.data.data.host_nickname
                });
            }
        } catch (error) {
            console.error(error);
        }

        if (type === "create") {
            setRoomName("");
        }

        setModalType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalType(null);
        setRoomName("");
        setSearch("");
        setJoinState({
            joinCode: "",
            name: "",
        });
    };

    const handleCreateRoom = async () => {
        if (roomName === "") {
            alertOpen("나루터 이름을 입력해주세요");
            return;
        }

        try {
            const response = await instance.post("/api/v1/narooteos", {
                title: roomName,
            });

            if (response.status === 201) {
                alertOpen("나루터가 개설되었습니다.");
                setNarooteoId(response.data.data.id);
                navigate("/naruteo");
            }
        } catch (error) {
            console.error(error);
        }

        closeModal();
    };

    const handleJoinRoom = async () => {

        try {
            const response = await instance.post('/api/v1/users/narooteos', {
                narooteo_id: narooteoBrief.id,
                participation_code: search,
            })

            if (response.status === 201) {
                alertOpen("나루터에 참여되었습니다.");
                setNarooteoId(narooteoBrief.id);
                navigate("/naruteo");
            }
        } catch (error) {
            console.error(error);
        }

        closeModal();
    };

    const renderModalInputs = () => {
        if (modalType === "create") {
            return (
                <ModalInput
                    title="이름"
                    placeholder="나루터 이름을 입력해주세요"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                />
            );
        }
        if (modalType === "join") {
            return (
                <>
                    <ModalInput
                        title="이름"
                        text={narooteoBrief.title}
                    />
                    <ModalInput
                        title="개설자"
                       text={narooteoBrief.hostNickname}
                    />
                </>
            );
        }
        return null;
    };

    return (
        <S.HomeSearchhWrapper>
            {/* 참여 코드 입력 input창 */}
            <S.HomeSearchInputWrapper>
                <S.HomeSearchInput
                    placeholder="참여 코드를 입력해주세요"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <S.HomeSearchInputFooterWrapper>
                    <S.HomeSearchInputFooterText>
                        개설된 나루터가 없나요?
                    </S.HomeSearchInputFooterText>
                    <S.HomeSearchInputFooterButtonText
                        onClick={() => openModal("create")}
                    >
                        개설하기
                    </S.HomeSearchInputFooterButtonText>
                </S.HomeSearchInputFooterWrapper>
            </S.HomeSearchInputWrapper>

            <S.HomeSearchParticipantsButton onClick={() => openModal("join")}>
                참여하기
            </S.HomeSearchParticipantsButton>

            {/* 모달 렌더링 */}
            {isModalOpen && (
                <CustomModal
                    title={
                        modalType === "create"
                            ? "나루터 개설하기"
                            : "나루터 참여하기"
                    }
                    description="나루터는 개설자와 참여자들이 함께 모여 질문을 하고 지식과 경험을 공유하는 공동체적인 소통의 공간입니다. 이곳에서는 다양한 주제에 대한 토론과 협력이 이루어지며, 참여자들이 서로 배우고 성장할 수 있는 기회를 제공합니다."
                    children={renderModalInputs()}
                    onCancel={closeModal}
                    onOk={
                        modalType === "create"
                            ? handleCreateRoom
                            : handleJoinRoom
                    }
                    text1={modalType === "create" ? "개설하기" : "참여하기"}
                    text2="취소하기"
                />
            )}

            {isAlertOpen && (
                <CustomAlert
                    description={alertMessage}
                    onOk={alertClose}
                    text="확인"
                />
            )}
        </S.HomeSearchhWrapper>
    );
}
