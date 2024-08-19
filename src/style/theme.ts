// theme.ts
// 색상 객체의 타입 정의
export const Colors = {
  primary900: '#102670', // 가장 어두운 색상
  primary800: '#1F3A90',
  primary700: '#2E4DA8',
  primary600: '#3D61C0',
  primary: '#5891EB', // 기본 색상
  primary400: '#85AEEE',
  primary300: '#A4C6F2',
  primary200: '#C2DDF6',
  primary100: '#E1F3FA',
  primary000: '#EBF4FC', // 가장 밝은 색상

  // Neutral Colors
  neutral900: '#1C1C4F', // 가장 어두운 색상
  neutral800: '#2E2E5F',
  neutral700: '#494976',
  neutral600: '#6A6A8D',
  neutral: '#9292A5', // 기본 색상
  neutral400: '#B7B7C9',
  neutral300: '#D4D4E3',
  neutral200: '#EAEAF6',
  neutral100: '#F5F5FF',
  neutral000: '#FAFAFF', // 가장 밝은 색상

  // Red Colors
  red900: '#7A082D', // 가장 어두운 색상
  red800: '#930D2E',
  red700: '#B7152F',
  red600: '#DB1F2C',
  red: '#FF2E2B', // 기본 색상
  red400: '#FF6F60',
  red300: '#FF977F',
  red200: '#FFC1AA',
  red100: '#FFE3D4',
  red000: '#FAFAFF', // 가장 밝은 색상

  // Yellow Colors
  yellow900: '#764400', // 가장 어두운 색상
  yellow800: '#8F5600',
  yellow700: '#B17101',
  yellow600: '#D48E01',
  yellow: '#F7AD02', // 기본 색상
  yellow400: '#FAC740',
  yellow300: '#FCD866',
  yellow200: '#FEE999',
  yellow100: '#FEF5CC',
  yellow000: '#FFFAE5', // 가장 밝은 색상

  // Green Colors
  green900: '#005D5E', // 가장 어두운 색상
  green800: '#007268',
  green700: '#008D73',
  green600: '#00A978',
  green: '#00C579', // 기본 색상
  green400: '#37DC8C',
  green300: '#5FED9A',
  green200: '#95F9B5',
  green100: '#C9FCD4',
  green000: '#F1FFF4', // 가장 밝은 색상

  // 예시: gray 색상 체계
  gray900: '#1A1A1A',
  gray800: '#333333',
  gray700: '#4D4D4D',
  gray600: '#666666',
  gray: '#808080',
  gray400: '#999999',
  gray300: '#B3B3B3',
  gray200: '#CCCCCC',
  gray100: '#E6E6E6',
  gray000: '#F8F8F8',

  // 그 외 색상
  text: '#333333',
  white: '#FFFFFF',
  black: '#000000',
  background: '#EEEFF3',
};

// FONT 함수의 파라미터 타입 정의
interface FontProps {
  weight: number;
  size: number;
  lineHeight: number;
}
// px를 rem으로 변환하는 함수
function pxToRem(px: number): string {
  const baseSize = 16; // 기본 폰트 크기 (16px = 1rem)
  return `${px / baseSize}rem`;
}

// FONT 함수의 반환 타입을 명시
function FONT({ weight, size, lineHeight }: FontProps): string {
  return `
  font-family: "Pretendard";
    font-weight: ${weight};
    font-size: ${pxToRem(size)};
    line-height: ${pxToRem(lineHeight)};
  `;
}

// 글꼴 스타일 객체의 타입 정의
// rem 기준
const Fonts = {
  // Header Fonts
  H1: FONT({ weight: 700, size: 24, lineHeight: 30 }),
  H2: FONT({ weight: 700, size: 22, lineHeight: 27.5 }),
  H3: FONT({ weight: 700, size: 20, lineHeight: 25 }),
  H4: FONT({ weight: 700, size: 18, lineHeight: 22.5 }),
  H5: FONT({ weight: 700, size: 16, lineHeight: 20 }),
  H6: FONT({ weight: 500, size: 14, lineHeight: 20 }),
  // Same size weight - Body, Sub
  Body1: FONT({ weight: 700, size: 14, lineHeight: 20 }),
  Sub1: FONT({ weight: 700, size: 14, lineHeight: 20 }),
  Body2: FONT({ weight: 500, size: 14, lineHeight: 20 }),
  Sub2: FONT({ weight: 500, size: 14, lineHeight: 20 }),
  Body3: FONT({ weight: 500, size: 12, lineHeight: 20 }),
  Sub3: FONT({ weight: 500, size: 12, lineHeight: 20 }),
};

// theme 객체의 타입 정의 및 export
export const theme = {
  Colors,
  Fonts,
};
