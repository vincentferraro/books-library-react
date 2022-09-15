
import './App.css';
import Welcome from './component/Welcome'
import Clock from './component/Clock'
function App() {
  
  
  
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
       
      <Welcome name='Vinc' />
      <Clock name='Vincenzo'/>
    </div>
    
  )
     
    

  
  
}

export default App;
