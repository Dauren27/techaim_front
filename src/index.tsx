import React from 'react';
import ReactDOM from 'react-dom';
import {I18nextProvider} from 'react-i18next';
import {Provider} from 'react-redux';
import App from './App';
import i18n from './i18n';
import './index.css';
import store from './store/store';
import {AuthProvider} from "./context/authContext";

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <AuthProvider>
                <Provider store={store}>
                    <App/>
                </Provider>
            </AuthProvider>
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);