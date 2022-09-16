import { Component } from 'react'
import '../../src/stylesheet/Button.css'
class Button extends Component{

    handleClick = () => {
    console.log('click', this.props.name)
    }
    
    render() {
        return (
            
            <button onClick={this.handleClick}>{this.props.name}</button>
        )
    }

}

export default Button