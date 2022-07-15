import { useNavigate } from "react-router-dom";
import { useState } from "react";
//import react

import api from "../../server/api";
//import server

import Loading from "../../shared/Loading";
import ButtonSubmit from "../../shared/ButtonSubmit";
import InputDefault from "../../shared/InputDefault";
//import components

import { ContainerFormClass } from "./styles";
//import styles

export default function InputsRegister() {
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");

  const [signUpData, setSignUpData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPw: "",
  });

  const [stateButton, setStateButton] = useState("habilitado");

  function newRegister(event) {
    event.preventDefault();

    if (inputConfirmPassword !== inputPassword) {
      setInputConfirmPassword("");
      setStateButton("passwordNoEquals");
      return;
    }
    setStateButton("loading");

    // ===
    signUpData.email = inputEmail;
    signUpData.name = inputName;
    signUpData.password = inputPassword;
    signUpData.confirmPw = inputConfirmPassword;
    // ===

    setSignUpData({ ...signUpData });

    const promise = api.post("/signUp", signUpData);
    promise.then(() => {
      navigate("../signIn", { replace: true });
    });
    promise.catch((err) => {
      const statusCode = err.response.status;
      if (statusCode === 400) {
        setStateButton("Err400");
        setInputEmail("");
        setInputName("");
        setInputPassword("");
        setInputConfirmPassword("");
      } else if (statusCode === 422) {
        setStateButton("Err422");
        setInputEmail("");
        setInputName("");
        setInputPassword("");
        setInputConfirmPassword("");
      } else {
        setStateButton("Err500");
      }
    });
  }

  if (
    (stateButton === "err" && inputEmail.length > 0) ||
    (stateButton === "passwordNoEquals" && inputConfirmPassword.length > 0)
  ) {
    setStateButton("habilitado");
  }

  return (
    <ContainerFormClass>
      <form onSubmit={newRegister}>
        <InputDefault
          placeholder="Nome"
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          minLength={4}
          maxLength={20}
        />
        <InputDefault
          placeholder="E-mail"
          type="email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <InputDefault
          placeholder="Senha"
          type="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title={"Ex: Hipotenus@24"}
        />
        <InputDefault
          placeholder="Confirme a senha"
          type="password"
          value={inputConfirmPassword}
          onChange={(e) => setInputConfirmPassword(e.target.value)}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        />
        <ButtonSubmit
          width={"303px"}
          backgroundcolor={
            stateButton === "habilitado"
              ? "#91BFBC"
              : stateButton === "loading"
              ? "#91BFBC"
              : "#8a8893"
          }
        >
          {stateButton === "loading" ? (
            <Loading height={20} width={20} />
          ) : stateButton === "passwordNoEquals" ? (
            "Senhas diferentes"
          ) : stateButton === "Err400" ? (
            "Usuário já cadastrado!"
          ) : stateButton === "Err422" ? (
            "Dados inválidos!"
          ) : stateButton === "Err500" ? (
            "Falha ao cadastrar!"
          ) : (
            "Cadastrar"
          )}
        </ButtonSubmit>
      </form>
    </ContainerFormClass>
  );
}
