import storageAvailable from '../../components/utilities/localstorage';

// ---------------- paths (Data) --------------------
const STORE_USER = 'REDUX/APP/APP/STORE_USER';
const CHECK_USER_AUTH = 'REDUX/APP/APP/CHECK_USER_AUTH';
const LOG_OUT = 'REDUX/APP/APP/LOG_OUT';
const CHECK_USER_TOKEN_AUTH = 'REDUX/APP/APP/CHECK_USER_TOKEN_AUTH';
const LOAD_BUSINESS = 'REDUX/APP/APP/LOAD_BUSINESS';
const STORE_BUSINESS_DATA = 'REDUX/APP/APP/STORE_BUSINESS_DATA';
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
const logOutAction = () => ({
  type: LOG_OUT,
});
const checkUserTokenAuth = (payload) => ({
  type: CHECK_USER_TOKEN_AUTH,
  payload,
});
const loadBusiness = (payload) => ({
  type: LOAD_BUSINESS,
  payload,
});
const saveBusinessInfo = (payload) => ({
  type: STORE_BUSINESS_DATA,
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
    case STORE_USER:
      if (action.payload.auth) {
        newObj.auth = true;
        newObj.userName = action.payload.userName;
        newObj.userLastName = action.payload.userLastName;
        if (storageAvailable('localStorage')) {
          localStorage.setItem('easyt', JSON.stringify(action.payload.ato));
        }
        return newObj;
      }
      newObj.auth = false;
      newObj.userName = null;
      newObj.userLastName = null;
      return newObj;
    case LOG_OUT:
      return userInitialState;
    default:
      return state;
  }
};
const businessReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_BUSINESS_DATA:
      return action.payload;
    default:
      return state;
  }
};
// ---------- Middlewares and Side Effects ----------
const activatePanelMiddleware = (store) => (next) => (action) => {
  if (action.type === STORE_USER) {
    console.log(action.payload.userId);
    if (action.payload.auth) {
      store.dispatch(loadBusiness(action.payload.userId));
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

const fetchUserTokenAuthMiddleware = (store) => (next) => (action) => {
  if (action.type === CHECK_USER_TOKEN_AUTH) {
    fetch(`/getUsertkAuth/${action.payload}`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
      .then((json) => store.dispatch(retrieveUserInfo(json)));
  }
  next(action);
};

const loadBusinessFetchMiddleware = (store) => (next) => (action) => {
  if (action.type === LOAD_BUSINESS) {
    console.log(action.payload);
    fetch(`/loadBusiness/${action.payload}`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
      .then((json) => store.dispatch(saveBusinessInfo(json)));
  }
  next(action);
};
// --------------------- Exports --------------------
export {
  // --------- Reducers ---------
  switchReducer,
  userInfoReducer,
  businessReducer,
  // ----- Actions (Switch) -----
  switchLoginState,
  switchPanelState,
  // ------ Actions (Data) ------
  retrieveUserInfo,
  checkUserAuth,
  checkUserTokenAuth,
  logOutAction,
  // ------- Middlewares --------
  activatePanelMiddleware,
  fetchUserAuthMiddleware,
  fetchUserTokenAuthMiddleware,
  loadBusinessFetchMiddleware,
};
