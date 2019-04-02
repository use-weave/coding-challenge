import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Form from 'components/Form'
import ItemsList from 'components/ItemsList'
import Item from 'components/Item'
import { addItem, getItems } from 'actions/Items'

// NOTE: components declared in the "components" directory, should not be attached
// or connected to redux. Use props to pass data into them.

// Item should be an extremely simple component that represents one item in our list

// Form will be more complicated, because it has to communicate with the top level app via properties.

// Provides a basic connection to redux. If you want to read from the state of
// the store, you will need to pass in an argument to this function. Examples should
// be online for this.

function mapStateToProps(state) {
  return {...state};
}

@connect(mapStateToProps, {addItem})
class App extends Component {

  Submit = (newItem) => {
    // dispatch an action
    // even.target.value gets passed into the action that gets dispatched to the reducer
    console.log('2',newItem)
    return this.props.addItem(newItem)
  }

  // All components need a render method, and this is the top level of our application's render.
  // When properties or state changes for this function, this function gets called.
  // It is super important to avoid re-rendering your app if it is not needed (especially if it
  // is in the top level of your app -- imagine your entire app re-rendering if one small variable
  // changes). The trick is to create smaller components to handle changing data like that.
  // That would give you bonus points for this challenge.
  render() {
      return (
          <div className="container">
            <div className="col-6">
              <Form Submit={this.Submit}/>
            </div>
            <div className="col-6">
              <ItemsList />
            </div>
          </div>
      )
  }
}

export default App
