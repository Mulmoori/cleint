import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const narooteoState = atom<number>({
    key: "narooteoState",
    default: -1,
})

interface NarooteoBrief {
    id: number;
    title: string;
    hostNickname: string;
}

export const narooteoBriefState = atom<NarooteoBrief>({
    key: "narooteoBriefState",
    default: {
        id: -1,
        title: "",
        hostNickname: "",
    }
})