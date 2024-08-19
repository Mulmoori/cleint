import { useState } from "react";
import * as S from "./style";
import SignIn from "@components/auth/sign-in/SignIn";
import SignUp from "@components/auth/sign-up/SignUp.tsx";

export default function Auth() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <S.Container>
      {isLogin ? (
        <SignIn onClick={handleToggle} />
      ) : (
        <SignUp onClick={handleToggle} />
      )}
    </S.Container>
  );
}
