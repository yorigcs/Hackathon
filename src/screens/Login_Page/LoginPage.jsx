import { Link } from "react-router-dom";
import InputsLogin from "./InputsLogin";
import ButtonOnlyWords from "../../shared/ButtonOnlyWords";
import Main from "../../shared/Main";


export default function LoginPage(){
  return  (
  <Main margin_top={'330'}>
    <InputsLogin />
    <Link to="/signUp">
      <ButtonOnlyWords>Já possui cadastro? Faça login!</ButtonOnlyWords>
    </Link>
  </Main>
)
}
