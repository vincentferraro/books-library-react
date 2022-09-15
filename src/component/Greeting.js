function Greeting(props){
    
    function UserGreeting(props) {
        return (
            <h1>Hi {props.name}!</h1>
        )
    }

    function GuestGreeting() {
        return (
            <h1>Hi dear Guest!</h1>
        )
    }

    const isLoggedIn = props.isLoggedIn
    
    
    if (isLoggedIn) {
      return  <UserGreeting name="Vincent"/>
    } else {
       return <GuestGreeting />
    }
}

export default Greeting