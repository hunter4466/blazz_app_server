import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Mainlogged from './components/mainlogged';

const App = () => {
  const switchState = useSelector((state) => state.switchReducer);
  return (
    <div>
      {switchState.loginSwitch ? <Login /> : ' '}
      {switchState.panelSwitch ? <Mainlogged /> : ' '}
    </div>
  );
};

export default App;
