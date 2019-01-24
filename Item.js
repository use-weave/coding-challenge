import React, { Component } from 'react'
import Items from '../reducers/Items'
    const reactElementsArray = Items.map((Items) => {
        return (
            <p>{Items}</p>
        );
    });




/* import React, { Component } from 'react'

class Item extends React.Component {
    createTasks(item) {
    return <li key={item.key}>{item.text}</li>
    }
    render() {
        const itemEntries = this.props.entries 
        const listItems = itemEntries.map(this.createTasks)
        return <ul className="theList">{listItems}</ul>
    }
}
export default Item */
