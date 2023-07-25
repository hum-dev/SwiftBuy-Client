import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

import {UiContextProvider} from './components/Context/ProfileContext/ProfileContext'

import { Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <UiContextProvider>
          <App />
        </UiContextProvider>
      </PersistGate>
    </Provider>
    <ToastContainer />
  </React.StrictMode>,
)
   

