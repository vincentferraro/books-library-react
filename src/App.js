
import './App.css';
import Welcome from './component/Welcome'

function App() {
  
  function setName(name) {
    return name
  }
  
  function Avatar(props) {
    return (
      <div>
        <p>Prenom: {props.user.name}</p>
        <p>Nom: {props.user.surname }</p>
      </div>
    )
  }
  function Comment(props) {
    return (

      <div>
        <p> Commentaire de {props.author}: </p>
        <textarea />
      </div>
    )
  }

  function Card() {
    const author = {
      name: 'Kad',
      surname : 'Ferr'
    }
    return (
      <div>
        <Avatar user={author}/>
        <Comment author='User1' />
      </div>
    )
  }
  
  return (
    <div>
       
      <Card />

    </div>
    
  )
     
    

  
  
}

export default App;
