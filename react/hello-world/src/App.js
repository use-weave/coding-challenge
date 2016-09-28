import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

import * as ItemActions from 'actions/Items'

import Item from 'components/Item'
import Form from 'components/Form'

@connect()
class App extends Component {

    render() {
        return (
            <div className="container">
                <h1>What's up from Weave</h1>
            </div>
        )
    }
}

export default App
