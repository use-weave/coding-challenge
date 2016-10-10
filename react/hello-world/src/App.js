import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'


import * as ItemActions from 'actions/Items'

// NOTE: components declared in the "components" directory, should not be attached
// or connected to redux. Use props to pass data into them.

// Item should be an extremely simple component that represents one item in our list
import Item from 'components/Item'

// Form will be more complicated, because it has to communicate with the top level app via properties.
import Form from 'components/Form'

// Provides a basic connection to redux. If you want to read from the state of
// the store, you will need to pass in an argument to this function. Examples should
// be online for this.
@connect()
class App extends Component {

    // All components need a render method, and this is the top level of our application's render.
    // When properties or state changes for this function, this function gets called.
    // It is super important to avoid re-rendering your app if it is not needed (especially if it
    // is in the top level of your app -- imagine your entire app re-rendering if one small variable
    // changes). The trick is to create smaller components to handle changing data like that.
    // That would give you bonus points for this challenge.
    render() {
        return (
            <div className="container">
                <h1>What's up from Weave</h1>
                <Form/>

                {/*your code goes here... also this is an example of a comment in JSX*/}
            </div>
        )
    }
}

export default App
