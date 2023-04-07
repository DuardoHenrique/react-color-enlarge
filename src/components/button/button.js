const Button = ({label, alertLabel}) => {
    return (
    <button style={{cursor: 'pointer'}} onClick={() => alertLabel(label)}> {label} </button>
    )
}

Button.defaultProps = {
    label: 'Previous'
}

export default Button