import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkUserAuth, checkUserTokenAuth } from '../redux/app/app';
import storageAvailable from './utilities/localstorage';

const Login = () => {
  const userState = useSelector((state) => state.userInfoReducer);
  const dispatch = useDispatch();
  const [loginMsg, setLoginMsg] = useState('');
  const [inputType, setInputType] = useState('password');
  const loginAction = () => {
    const userInput = document.getElementById('user_input');
    const userPass = document.getElementById('pass_input');
    const loginMsg = 'Usuario o contraseña incorrectos, por favor intenta de nuevo';
    if (userInput.value.length > 0 && userPass.value.length > 0) {
      dispatch(checkUserAuth({ user: userInput.value, pass: userPass.value }));
      if (!userState.auth) {
        setLoginMsg(loginMsg);
      }
    } else {
      setLoginMsg(loginMsg);
    }
  };
  useEffect(() => {
    if (storageAvailable('localStorage')) {
      if (localStorage.getItem('easyt')) {
        dispatch(checkUserTokenAuth(localStorage.getItem('easyt')));
      }
    }
  }, []);
  const handleLogin = () => {
    loginAction();
  };
  const handleCheckBoxChange = () => {
    if (inputType === 'text') {
      setInputType('password');
    } else {
      setInputType('text');
    }
  };
  return (
    <div className="login_main_container">
      <div className="login_left_side">
        <h1>Login IMG</h1>
      </div>
      <div className="login_right_side">
        <div className="login_form_container">
          <h1 className="login_form_title">Ingresa a tu cuenta</h1>
          <h2 className="input_label">Usuario</h2>
          <input className="login_input" type="text" id="user_input" placeholder="Usuario" />
          <h2 className="input_label">Contraseña</h2>
          <input className="login_input" type={inputType} id="pass_input" placeholder="Contraseña" />
          <div className="login_show_pass_area">
            <input className="login_checkbox" type="checkbox" onChange={() => { handleCheckBoxChange(); }} />
            <h2 className="">Mostrar contraseña</h2>
          </div>
          <p className="login_msg">{loginMsg}</p>
          <div className="login_show_pass_area">
            <input className="login_checkbox" type="checkbox" onChange={() => { handleCheckBoxChange(); }} />
            <h2 className="">Recordarme</h2>
          </div>
          <button className="login_btn" type="button" onClick={() => { handleLogin(); }}>Iniciar sesión</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
