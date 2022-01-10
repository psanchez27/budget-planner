const Card = ({children, type}) => {
    return (
        <div className="card" style={{
            backgroundColor: type==='income' ? '#2ecc71'
            : type==='expense' ? '#e74c3c' : '',
             border: type==='form' ? '3px solid #000' : 'none',
             color: type==='form' ? '#000' : '#fff'
        }}>
            {children}
        </div>
    )
}

export default Card
