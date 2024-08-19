import { useState } from "react";
import * as S from "./style";
import CustomModal from "@components/common/Modal";
import ModalInput from "@components/common/ModalInput";

interface JoinState {
    joinCode: string;
    name: string;
}

export default function HomeSearch(): JSX.Element {
    const [search, setSearch] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalType, setModalType] = useState<"create" | "join" | null>(null);
    const [roomName, setRoomName] = useState<string>("");

    const [joinState, setJoinState] = useState<JoinState>({
        joinCode: "",
        name: "",
    });

    const openModal = (type: "create" | "join") => {
        setModalType(type);
        setIsModalOpen(true);
        if (type === "create") {
            setRoomName("");
        } else if (type === "join" && search === "") {
            alert("참여 코드를 입력해주세요");
            return;
        }
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

    const handleCreateRoom = () => {
        if (roomName === "") {
            alert("나루터 이름을 입력해주세요");
            return;
        }
        console.log("나루터 이름 :" + roomName);
        // Todo :  방 개설 API 호출

        closeModal();
    };

    const handleJoinRoom = () => {
        if (joinState.name === "" || joinState.joinCode === "") {
            alert("참여 코드와 이름을 입력해주세요");
            return;
        }
        console.log("참여코드 :" + search);
        console.log("이름 :" + joinState.name);
        console.log("개설자 :" + joinState.joinCode);
        // Todo :  참여 코드 검색 후 참여 API 호출

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
                        placeholder="이름을 입력해주세요"
                        value={joinState.name}
                        onChange={(e) =>
                            setJoinState({
                                ...joinState,
                                name: e.target.value,
                            })
                        }
                    />
                    <ModalInput
                        title="개설자"
                        placeholder="개설자 이름을 입력해주세요"
                        value={joinState.joinCode}
                        onChange={(e) =>
                            setJoinState({
                                ...joinState,
                                joinCode: e.target.value,
                            })
                        }
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
        </S.HomeSearchhWrapper>
    );
}
