import { Component } from 'react'

class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
    render() {
        return (

        <div>
                <h1> Bienvenue {this.props.name}</h1>
        </div>)
        
    }
}

export default Welcome;