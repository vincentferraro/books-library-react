import { Component } from 'react'
import '../../src/stylesheet/Button.css'
class Button extends Component{


    render() {
        return (
            
            <button>{this.props.name}</button>
        )
    }

}

export default Button