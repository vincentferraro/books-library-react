import { Component } from 'react'

class Form extends Component{

    constructor(props) {
        super(props)
        this.state = {
            text: 'Ecrire ici',
            textarea: 'Ecrire ici aussi'
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const target = event.target
        this.setState({
            [target.name]:target.value
        })
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
                    <input name="text" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Text area:
                    <textarea name="textarea"value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Envoyer"/>
                
            </form>
            
        )
    }
}

export default Form