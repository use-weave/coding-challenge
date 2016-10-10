import React, { Component } from 'react'
class Form extends React.Component{
  render(){
    return(
      <form className="itemform" onSubmit={this._handlesubmit.bind(this)}>
        <label> Join the Discussion</label>
        <div className="itemformfields">
          <input placeholder="name" ref={(input) => this._name = input}/>
        </div>
        <div className="itemformactions">
          <button type="submit">Post item Item</button>
        </div>
      </form>
      );
  }

          _handlesubmit(event){
             event.preventDefault();
             let name = this._name;
             this.props.addItem(name.value);
          }

}