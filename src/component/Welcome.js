import { Component } from 'react'

class Welcome extends Component {

    render() {
        return (

        <div>
                <h1> Bienvenue {this.props.name}</h1>
        </div>)
        
    }
}