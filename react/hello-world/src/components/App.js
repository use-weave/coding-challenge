import React from 'react'
import AddItem from '../containers/AddItem'
import ItemList from '../containers/ItemList'

import '../App.css'

const App = () => (
  <div className="app">
    <AddItem />
    <ItemList />
  </div>
)

export default App
