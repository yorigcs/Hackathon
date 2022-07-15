import ButtonOnlyWords from "../../shared/ButtonOnlyWords";
import Main from "../../shared/Main";
import InputsRegister from "./InputsRegister";
import { Link } from "react-router-dom";
import Logo from "../../shared/Logo";


function RegisterPage(){
  return (
    <>
      <Main margin_top={'50'}>
       <Logo size={'300'} />
        <InputsRegister />
        <Link to="/signIn">
          <ButtonOnlyWords>Já possui cadastro? Faça login!</ButtonOnlyWords>
        </Link>
      </Main>
    </>
  )
}






export default RegisterPage;