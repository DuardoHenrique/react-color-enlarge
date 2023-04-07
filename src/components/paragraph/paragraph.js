const Paragraph = ({children,color}) => {
    return (
            <p style={{color: color, textTransform: 'uppercase'}}>{children}</p>
    )
}

Paragraph.defaultProps = {
    color: '#362BAE'
}

export default Paragraph