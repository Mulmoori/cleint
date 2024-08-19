import React, { useState } from "react";
import * as S from "./style";

const TabBar: React.FC = () => {
	const [activeTab, setActiveTab] = useState<"전체질문방" | "나의질문방">(
		"전체질문방"
	);

	return (
		<S.TabBarContainer>
			<S.Tab
				isActive={activeTab === "전체질문방"}
				onClick={() => setActiveTab("전체질문방")}
			>
				전체질문방
			</S.Tab>
			<S.Tab
				isActive={activeTab === "나의질문방"}
				onClick={() => setActiveTab("나의질문방")}
			>
				나의질문방
			</S.Tab>
		</S.TabBarContainer>
	);
};

export default TabBar;
