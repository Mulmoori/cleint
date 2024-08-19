/**
 * @description 날짜를 받아서 해당 날짜의 시간읠 계산합니다.
 */
export const calculateTime = (date: Date): string => {
    const milliSeconds = new Date().getDate() - date.getDate();

    const seconds = milliSeconds / 1000;

    if (seconds < 60) {
        return `${seconds}초 전 작성`
    }

    const minutes = seconds / 60;

    if (minutes < 60) {
        return `${minutes}분 전 작성`
    }

    const hours = minutes / 60;

    if (hours < 24) {
        return `${hours}시간 전 작성`
    }

    const days = hours / 24;

    if (days < 7) {
        return `${days}일 전 작성`
    }

    const weeks = days / 7;

    if (weeks < 5) {
        return `${weeks}주 전 작성`
    }

    const months = days / 30;

    if (months < 12) {
        return `${months}개월 전 작성`
    }

    const years = months / 12;

    return `${years}년 전 작성`
}