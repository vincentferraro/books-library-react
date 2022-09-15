import { Component } from "react";

class LoggingButton extends Component{

    constructor(props) {
        super(props)
        this.state = {
            toggle:true
        }
    }

    handleClick = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.toggle ? 'OFF': 'ON'}
            </button>
        )
    }
}
    
export default LoggingButton