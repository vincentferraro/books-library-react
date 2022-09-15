function LoggingButton2() {
    
    
    function handleClick(e){
        e.preventDefault()
        console.log('Click')

    }

    return (
        <button onClick={handleClick} >Click</button>
    )
}

export default LoggingButton2