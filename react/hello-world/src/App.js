import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Form from 'components/Form'
import Item from 'components/Item'
import { addItem } from 'actions/Items'

function mapStateToProps(state) {
  return {...state};
}

// Still trying to wrap my head around "@" and how it works, it does 
// some sort of bind, right?
@connect(mapStateToProps, {addItem})
class App extends Component {

  
  // dispatch an action
  Submit = (newItem) => this.props.addItem(newItem)
  // even.target.input.value gets passed into the action that gets dispatched to the reducer
  
  render() {

    return (
      <div className="container"> 
        <div>
          <Form Submit={this.Submit}/>
        </div>
        <div>
          <Item Items={this.props.Items}/>
        </div>
      </div>
    )
  }
}

export default App
