import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkUserAuth } from '../redux/app/app';

const Login = () => {
  const userState = useSelector((state) => state.userInfoReducer);
  const dispatch = useDispatch();
  const [loginMsg, setLoginMsg] = useState('');
  const [inputType, setInputType] = useState('password');
  const handleLogin = () => {
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
  const handleCheckBoxChange = () => {
    if (inputType === 'text') {
      setInputType('password');
    } else {
      setInputType('text');
    }
  };
  return (
    <div className="login_main_container">
      <div className="login_form_container">
        <h1 className="login_form_title">Inicio de sesión</h1>
        <input className="login_input" type="text" id="user_input" placeholder="Usuario" />
        <input className="login_input" type={inputType} id="pass_input" placeholder="Contraseña" />
        <div className="login_show_pass_area">
          <p className="login_label">Mostrar contraseña</p>
          <input className="login_checkbox" type="checkbox" onChange={() => { handleCheckBoxChange(); }} />
        </div>
        <button className="login_btn" type="button" onClick={() => { handleLogin(); }}>Iniciar sesión</button>
        <p className="login_msg">{loginMsg}</p>
      </div>
    </div>
  );
};

export default Login;
