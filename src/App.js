import React from 'react';
import Login from './components/Login';
import Mainlogged from './components/mainlogged';

const App = () => {
  const handleStoreCloseClick = () => {
  };
  return (
    <div>
      {switchState.loginSwitch ? <Login /> : ' '}
      {switchState.panelSwitch ? <Mainlogged /> : ' '}
    </div>
  );
};

export default App;
