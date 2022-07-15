
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../contexts/auth';
//import react

import api from '../../server/api';
//import server

import Loading from '../../shared/Loading';
import ButtonSubmit from '../../shared/ButtonSubmit';
import InputDefault from '../../shared/InputDefault';
//import components

import { ContainerFormClass } from './styles'
//import styles

function InputsLogin() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
  });



  const [stateButton, setStateButton] = useState('habilitado');

  function Login(event) {
    event.preventDefault();

    setStateButton('loading');

    // ===
    signUpData.email = inputEmail;
    signUpData.password = inputPassword;
    // ===

    setSignUpData({ ...signUpData });

    const promise = api.post('/signIn', signUpData);
    promise.then((resp) => {
      signIn(resp.data)
    });
    promise.catch(err => {

      const statusCode = err.response.status
      if (statusCode === 422) {
        setStateButton('Err422');
        setInputEmail('');
        setInputPassword('');
      } else {
        setStateButton('Err500');
      }
    });
  }

  if (
    ((stateButton === 'Err422' || stateButton === 'Err500') && inputEmail.length > 0)
  ) {
    setStateButton('habilitado');
  }

  return (
    <ContainerFormClass>
      <form onSubmit={Login}>

        <InputDefault
          placeholder="E-mail"
          type="email"
          value={inputEmail}
          onChange={e => setInputEmail(e.target.value)}
        />
        <InputDefault
          placeholder="Senha"
          type="password"
          value={inputPassword}
          onChange={e => setInputPassword(e.target.value)}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title={'Ex: Hipotenus@24'}
        />

        <ButtonSubmit
          width={'303px'}
          backgroundcolor={
            stateButton === 'habilitado'
              ? '#91BFBC'
              : stateButton === 'loading'
                ? '#b5c9c8'
                : '#dbdbdb'
          }
        >
          {stateButton === 'loading' ? (
            <Loading height={20} width={20} />
          ) : stateButton === 'Err422' ? (
            'Senha ou email incorretos!'
          ) : stateButton === 'Err500' ? (
            'Falha ao fazer login!'
          ) : (
            'Entrar'
          )}
        </ButtonSubmit>
      </form>
    </ContainerFormClass>
  );
}

export default InputsLogin;