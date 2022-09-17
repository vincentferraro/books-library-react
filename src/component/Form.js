import { Component } from 'react'

class Form extends Component{

    constructor(props) {
        super(props)
        this.state = { text: 'Ecrire ici' }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({ text: event.target.value })
        
    }

    handleSubmit(event) {
        console.log('Submit envoyé:' + this.state.text)
        event.preventDefault()
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Text:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Envoyer"/>
                
            </form>
            
        )
    }
}

export default Form