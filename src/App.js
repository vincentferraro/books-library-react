import { Component } from "react";
import Button from './component/Button'

import './App.css'
class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
           isHome : true,
           isBooks: false,
           isAbout: false
          }
  }

  render() {
    return (
      
      <div>
        <nav>
          <Button name="Home" />
          <Button name="Books" />
          <Button name="About"/>
        </nav>
      </div>
    )
  }
  
}

export default App