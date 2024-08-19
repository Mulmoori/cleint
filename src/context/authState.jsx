// authState.ts

import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// 유저 상태
export const userState = atom({
    key: "userState",
    default: null,
    effects_UNSTABLE: [persistAtom],
});
