function NumberList(props) {
    const numbers = props.numbers
    const listItem = numbers.map((number) => <li key={props.id}>{number}</li>
    )
    

    return (
        <ul>{listItem}</ul>
    )
}
export default NumberList