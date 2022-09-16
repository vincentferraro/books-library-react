function NumberList(props) {
    const numbers = props.numbers
    const listItem = numbers.map((number, index) => <li id={index} key={index}>{number}</li>
    )

    return (
        <ul>{listItem}</ul>
    )
}
export default NumberList