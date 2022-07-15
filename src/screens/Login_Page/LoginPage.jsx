import { Link } from "react-router-dom";
import InputsLogin from "./InputsLogin";
import ButtonOnlyWords from "../../shared/ButtonOnlyWords";
import Main from "../../shared/Main";
import Logo from "../../shared/Logo";
export default function LoginPage(){
  return  (
  <Main  margin_top={'70'}>
    <Logo  size={'300'}/>
    <InputsLogin />
    <Link to="/signUp">
      <ButtonOnlyWords>Não possui cadastro? Cadastre-se!</ButtonOnlyWords>
    </Link>
  </Main>
)
}

