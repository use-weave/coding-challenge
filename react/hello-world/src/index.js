import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from './reducers'

import App from './App'
/* eslint-disable no-unused-vars */
import style from './stylesheets/app.scss'


const store = createStore(
    combineReducers({...reducers}),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

ReactDOM.render((
        <Provider store={store}>
            <App />
        </Provider>
    ), document.getElementById('root')
)
