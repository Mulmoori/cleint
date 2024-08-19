import { useEffect, useState } from "react";
import * as S from "./style";

export default function HomeSearch(): JSX.Element {
    const [search, setSearch] = useState<string>("");

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
                    <S.HomeSearchInputFooterButtonText>
                        참여하기
                    </S.HomeSearchInputFooterButtonText>
                </S.HomeSearchInputFooterWrapper>
            </S.HomeSearchInputWrapper>

            <S.HomeSearchParticipantsButton>
                참여하기
            </S.HomeSearchParticipantsButton>

            {/* 참여하기 버튼  */}
        </S.HomeSearchhWrapper>
    );
}
