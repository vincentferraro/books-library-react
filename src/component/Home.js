

function Home(props) {
    const display = props.display
    
    if (display) {
        return (
            <main>
                <h1> Bienvenue sur Books Library</h1>
            <p> Books library est connecté à une API afin d'afficher les lives de ma bibliothèque</p>
            </main>
        )
    }
}
            
        
export default Home