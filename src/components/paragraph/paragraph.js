const Paragraph = ({children,color}) => {
    return (
            <p style={{color: color, textTransform: 'uppercase'}}>{children}</p>
    )
}

Paragraph.defaultProps = {
    backgroundColor: '#2F86AE',
    color: '#362BAE'
}

export default Paragraph