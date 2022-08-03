import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchFilmsAction, fetchPromoAction} from './services/api-action';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ErrorMessage />
    </Provider>
  </React.StrictMode>,
);
