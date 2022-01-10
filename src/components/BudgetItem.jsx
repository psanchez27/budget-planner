import Card from "./shared/Card"
import {FaTimes} from 'react-icons/fa'
const BudgetItem = ({ item, handleDelete }) => {
    return (
        <Card type={item.type}>
            <div>{item.name}</div>
            <div>{item.amt}</div>
            <button onClick={() => handleDelete(item.id)} className="close">
                <FaTimes color='#fff' />
            </button>
        </Card>
    )
}

export default BudgetItem
