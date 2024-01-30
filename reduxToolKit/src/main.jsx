import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    // user:
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode store={}>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
)
