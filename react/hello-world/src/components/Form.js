import React, { Component } from 'react'
import { addItem } from '../actions/Items'
/*import { connect } from 'react-redux' */

class Form extends Component {
  constructor() {
    super();
    this.state = {
      item: ""
    }
  }

  handleChange = (event) => {
    this.setState({item: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const item = {
      item: this.state.item,
      id: Math.random()
    }
    let action = addItem(item)
    this.props.dispatch(action)
    this.setState({item: ""})
    document.getElementById("item").value=""
  }

  render() {
    return (
      <form className="body" onSubmit={this.handleSubmit}>
      <label className="input">
        Input Item 
        <br/>
        <input className="input"type="text" id="item" onChange={this.handleChange} />
      </label>
      <br/>
      <button type="submit"value="Submit"className="button">Enter</button>
      </form>
    )
  }
}

export default Form
/* const mapDispatchToProps = dispatch => {
  return {
    onEnterItem: item => {
      dispatch(addItem(item))
    }
  }
}

export default connect(null, mapDispatchToProps)(Form); */
