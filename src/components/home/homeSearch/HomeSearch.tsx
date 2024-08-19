import { useEffect, useState } from "react";
import * as S from "./style";
import CustomModal from "@components/common/Modal";
import ModalInput from "@components/common/ModalInput";

export default function HomeSearch(): JSX.Element {
    const [search, setSearch] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [roomName, setRoomName] = useState<string>("");

    const handleCreateRoom = () => {
        setIsModalOpen(true); // 모달을 열기 위해 상태 업데이트
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // 모달을 닫기 위해 상태 업데이트
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
                        onClick={handleCreateRoom}
                    >
                        개설하기
                    </S.HomeSearchInputFooterButtonText>
                </S.HomeSearchInputFooterWrapper>
            </S.HomeSearchInputWrapper>

            <S.HomeSearchParticipantsButton>
                참여하기
            </S.HomeSearchParticipantsButton>

            {/* 모달 렌더링 */}
            {isModalOpen && (
                <CustomModal
                    title="나루터 개설하기"
                    description="나루터는 개설자와 참여자들이 함께 모여 질문을 하고 지식과 경험을 공유하는 공동체적인 소통의 공간입니다. 이곳에서는 다양한 주제에 대한 토론과 협력이 이루어지며, 참여자들이 서로 배우고 성장할 수 있는 기회를 제공합니다."
                    children={
                        <>
                            {/* 이름 컴포넌트 */}

                            <ModalInput
                                title="이름"
                                placeholder="나루터 이름을 입력해주세요"
                                value={roomName}
                                onChange={(e) => setRoomName(e.target.value)}
                            />
                        </>
                    }
                    onCancel={handleCloseModal}
                    onOk={() => {
                        // 모달 확인 버튼 클릭 시 이벤트
                        handleCloseModal();
                    }}
                    text1="개설하기"
                    text2="취소하기"
                />
            )}
        </S.HomeSearchhWrapper>
    );
}
