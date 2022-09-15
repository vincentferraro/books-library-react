import { Component } from "react";

class Clock extends Component{

    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            ()=>this.tick(),1000
        )
        
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
        
    }

    tick() {
        this.setState({
            date : new Date()
        })
    }

    FormattedDate(props) {
        return (
            <h2>Il est : {props.date.toLocaleTimeString() }</h2>
        )
    }
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <p>Il est : {this.state.date.toLocaleTimeString()}</p>
                <this.FormattedDate date={this.state.date} />
            </div>
        )
    }
}

export default Clock