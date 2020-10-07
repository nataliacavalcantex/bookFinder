import './config/reactotronConfig';
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react'
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import {ToastContainer} from 'react-toastify'
import history from './services/history';
import GlobalStyle from './styles/global';
import {store,persistor} from './store';

function App() {
  return (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Router history={history}>
                <Routes />
                 <GlobalStyle />
                 <ToastContainer autoClose={3000}/>
            </Router>
        </PersistGate>
    </Provider>
  );
}

export default App;