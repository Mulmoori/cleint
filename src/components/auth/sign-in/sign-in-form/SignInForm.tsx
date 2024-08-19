import * as S from "./style.ts";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { SizedBox } from "@components/common/sized-box/style.ts";
import RadiusButton from "@components/common/button/radius-button/RadiusButton.tsx";
import InputField from "@components/common/input-field/InputField.tsx";
import { CONSTANT } from "../../../../constants/Constant.ts";
import Label from "@components/common/input-field/label/Label.tsx";
import instance from "../../../../api/axios.ts";

interface props {
  onClick: () => void;
}

export default function SingInForm(props: props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const navigate = useNavigate();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {

    if (isValid) {
      const formData = new FormData();

      formData.append("serial_id", email);
      formData.append("password", password);

      try {
        const response = await instance.post("/api/auth/login", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
        });

        if (response.status === 201) {
          navigate("/home");
        }
      } catch (error) {
        console.error(error);
        alert("로그인에 실패했습니다.");
      }
    }
  };

  useEffect(() => {
    if (
      CONSTANT.REGEX.EMAIL.test(email) &&
      CONSTANT.REGEX.PASSWORD.test(password)
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email, password]);

  return (
    <S.Container>
      <SizedBox width={"760px"} height={"293px"} />
      <S.Form>
        <S.Title>로그인</S.Title>
        <SizedBox width={"600px"} height={"60px"} />
        <Label text={"이메일"} />
        <SizedBox width={"600px"} height={"8px"} />
        <InputField
          placeholder={"이메일을 입력하세요."}
          width={"600px"}
          onChange={handleEmail}
        />
        <SizedBox width={"600px"} height={"48px"} />
        <Label text={"비밀번호"} />
        <SizedBox width={"600px"} height={"8px"} />
        <InputField
          placeholder={"비밀번호를 입력하세요."}
          width={"600px"}
          type={"password"}
          onChange={handlePassword}
        />
        <SizedBox width={"600px"} height={"48px"} />
        <RadiusButton
          content={"로그인"}
          onClick={handleLogin}
          isValid={isValid}
        />
        <SizedBox width={"600px"} height={"24px"} />
        <S.SignUpTextContainer>
          계정이 없으신가요?{" "}
          <S.SignUpLink onClick={props.onClick}>회원가입</S.SignUpLink>
        </S.SignUpTextContainer>
      </S.Form>
    </S.Container>
  );
}
