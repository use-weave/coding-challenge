import React, { Component } from 'react'
class Item extends React.Component{
  render(){
    return(
      <Form addItem={this._addItem.bind(this)}/>
      <p className="itemname">{this.props.name}</p>
      );
  }

  constructor(){
    super();

    this.state = {
      showItems: false
      Items: []
    }
  }

  _addItem(name){
    const item = {
      id=this.state.item.length+1,
      name
    };
    this.setState({items: this.state.items.concat([item])});
  }


}