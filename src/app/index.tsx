import React from 'react';
import { Provider as ProviderRedux } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { store } from './store';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'services/utils/queryClient';
import { AccessTokenProvider } from 'providers/AccessTokenProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { MainRoute } from 'modules';

let persistor = persistStore(store);

export const App = () => {
  return (
    <ProviderRedux store={store}>
      <Router>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <AccessTokenProvider>
              <MainRoute />
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                pauseOnHover
              />
            </AccessTokenProvider>
          </QueryClientProvider>
        </PersistGate>
      </Router>
    </ProviderRedux>
  );
};
