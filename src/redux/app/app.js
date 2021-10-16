// ---------------- paths (Data) --------------------
const STORE_USER = 'REDUX/APP/APP/STORE_USER';
const CHECK_USER_AUTH = 'REDUX/APP/APP/CHECK_USER_AUTH';
// ---------------- paths (Switch) ------------------
const SWITCH_LOGIN_STATE = 'REDUX/APP/APP/SWITCH_LOGIN_STATE';
const SWITCH_PANEL_STATE = 'REDUX/APP/APP/SWITCH_PANEL_STATE';
// ---------------- Actions (Switch) ----------------
const switchLoginState = (payload) => ({
  type: SWITCH_LOGIN_STATE,
  payload,
});
const switchPanelState = (payload) => ({
  type: SWITCH_PANEL_STATE,
  payload,
});
// ---------------- Actions (Data) ------------------
const retrieveUserInfo = (payload) => ({
  type: STORE_USER,
  payload,
});
const checkUserAuth = (payload) => ({
  type: CHECK_USER_AUTH,
  payload,
});
// --------------- Switch initial stateS -------------
const switchInitialState = {
  loginSwitch: true,
  panelSwitch: false,
};
const userInitialState = {
  auth: false,
  userName: null,
  userLastName: null,
};
// ----------------- SWITCH REDUCERS ----------------
const switchReducer = (state = switchInitialState, action) => {
  const newObj = {
    loginSwitch: state.loginSwitch,
    panelSwitch: state.panelSwitch,
  };
  switch (action.type) {
    case SWITCH_LOGIN_STATE:
      newObj.loginSwitch = action.payload;
      return newObj;
    case SWITCH_PANEL_STATE:
      newObj.panelSwitch = action.payload;
      return newObj;
    default:
      return state;
  }
};
// ----------------- MAIN REDUCERS ------------------
const userInfoReducer = (state = userInitialState, action) => {
  const newObj = {
    auth: action.auth,
    userName: state.userName,
    userLastName: state.userLastName,
  };
  switch (action.type) {
    case CHECK_USER_AUTH:
      return state;
    case STORE_USER:
      if (action.payload.auth) {
        newObj.auth = true;
        newObj.userName = action.payload.userName;
        newObj.userLastName = action.payload.userLastName;
        return newObj;
      }
      newObj.auth = false;
      newObj.userName = null;
      newObj.userLastName = null;
      return newObj;

    default:
      return state;
  }
};
const productsStoreReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
// ---------- Middlewares and Side Effects ----------
const activatePanelMiddleware = (store) => (next) => (action) => {
  if (action.type === STORE_USER) {
    if (action.payload.auth) {
      store.dispatch(switchLoginState(false));
      store.dispatch(switchPanelState(true));
    }
  }
  next(action);
};
const fetchUserAuthMiddleware = (store) => (next) => (action) => {
  if (action.type === CHECK_USER_AUTH) {
    fetch(`/getUserAuth/${action.payload.user}/${action.payload.pass}`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
      .then((json) => store.dispatch(retrieveUserInfo(json)));
  }
  next(action);
};
// --------------------- Exports --------------------
export {
  // --------- Reducers ---------
  switchReducer,
  userInfoReducer,
  productsStoreReducer,
  // ----- Actions (Switch) -----
  switchLoginState,
  switchPanelState,
  // ------ Actions (Data) ------
  retrieveUserInfo,
  checkUserAuth,
  // ------- Middlewares --------
  activatePanelMiddleware,
  fetchUserAuthMiddleware,
};
