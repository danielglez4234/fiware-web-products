import React                from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Button               from '@mui/material/Button';

import PageNotFound from './components/mainPage/PageNotFound';
import Navbar       from './components/mainPage/Navbar';
import MainPage     from './components/mainPage/MainPage';
import EntitieMain  from './components/entitiesCreator/EntitieMain';
import RulesMain    from './components/rulesCreator/RulesMain';

import iot_logo from './commons/img/iot_logo.svg'; // compress fix https://jakearchibald.github.io/svgomg/

function App() {
  const notistackRef = React.createRef();

  /*
   * handle close information messages for customHook PopUpMessage
   */
  const onClickDismiss = key => () => {
    notistackRef.current.closeSnackbar(key);
  }

  return (
    <SnackbarProvider
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      ref={notistackRef}
      action={(key) => (
          <Button className="snackbar-handle-close" onClick={onClickDismiss(key)}>
              X
          </Button>
      )}
    >
      <div className="container">
        <Navbar />

        <Router>
          <Routes>
            <Route exact path="/" element={<Navigate to="/home" />} /> {/*blank path redirects to -> /WebReport*/}
            <Route exact path="/home" element={
                <MainPage />
              } />
            <Route exact path="/entities" element={
                <EntitieMain />
              } />
            <Route exact path="/rules" element={
                <RulesMain />
              } />
            <Route path='*' element={<PageNotFound />} /> {/*only appears when no route matches*/}
          </Routes>
        </Router>
        <img src={iot_logo} alt="logo_instalación_conectada" className="logo" /> 
    </div>
    </SnackbarProvider>
  );
}

export default App;
