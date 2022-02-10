import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/login';
import Main from './pages/main';
import './App.css';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import CSWModal from './components/modal';
import CONSTANTS from './constants';
import { resetProfile, resetTokenObj } from './store/action';
let intervalTracker = null;

function App() {
  const { isLoggedIn, loggedInWith } = useSelector(state => state.app);
  const [isIdle, setIsIdle] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutSuccess = () => {
    dispatch(resetTokenObj());
    dispatch(resetProfile());
    navigate("/")
  }

  const handleClose = (flg) => {
    setIsIdle(false);
    clearInterval(intervalTracker);
    if (flg) {
      startIdleTracker();
    } else if (loggedInWith === CONSTANTS.FB_LOGIN_TYPE) {
      window.FB.logout(onLogoutSuccess)
    } else if(loggedInWith === CONSTANTS.G_LOGIN_TYPE) {
      const auth2 = window.gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log('User signed out.');
        onLogoutSuccess();
      });
    }
  };

  const startIdleTracker = () => {
    intervalTracker = setInterval(() => {
      console.log(new Date())
      console.log("User Idle ", isLoggedIn)
      setIsIdle(true)
    }, CONSTANTS.IDLE_TIME_PERIOD)
  }

  const onUserInteraction = () => {
    console.log("User Interactiion")
    clearInterval(intervalTracker);
    startIdleTracker();
  }

  useEffect(() => {
    if (isLoggedIn) {
      startIdleTracker();
    }
  }, [isLoggedIn]);

  return (
    <div className="csw-app" onClick={onUserInteraction}>
      <Routes>
        <Route exact path='/' element={<Login />} ></Route>
        <Route exact path='/app/*' element={<Main />} ></Route>
      </Routes>
      <CSWModal title="Do want to continue?" visible={isIdle} handleClose={handleClose} okText="Continue" />
    </div>
  );
}

export default App;
