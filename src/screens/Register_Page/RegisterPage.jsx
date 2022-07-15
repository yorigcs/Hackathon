import ButtonOnlyWords from "../../shared/ButtonOnlyWords";
import Main from "../../shared/Main";
import InputsRegister from "./InputsRegister";
import { Link } from "react-router-dom";


function RegisterPage(){
  return (
    <>
      <Main margin_top={'190'}>
       
        <InputsRegister />
        <Link to="/">
          <ButtonOnlyWords>Já possui cadastro? Faça login!</ButtonOnlyWords>
        </Link>
      </Main>
    </>
  )
}






export default RegisterPage;