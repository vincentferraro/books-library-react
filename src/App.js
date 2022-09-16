import NumberList from './component/NumberList'

import './App.css'

function App (){
  
  const numbers=["hello","bonjour","salam"]

    return (
      
      <div>
        
      <NumberList numbers={numbers}/>
      </div>
    )
  
  
}

export default App