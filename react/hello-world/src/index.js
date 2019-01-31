import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import { items } from './reducers/index.js'

import App from './App'
import './index.css'

const store = createStore(
    combineReducers({items})
)

ReactDOM.render((
        <Provider store={store}>
            <App />
        </Provider>
    ), document.getElementById('root')
)
