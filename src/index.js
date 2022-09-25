import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './root-cmp'
import { store } from './store'
import { HashRouter as Router } from 'react-router-dom'
import './styles/styles.scss'
import 'animate.css';
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

