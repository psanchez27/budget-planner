const Button = ({children, version, type}) => {
    return (
        <button className={`btn btn-${version}`}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
}

export default Button
