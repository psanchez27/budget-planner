import BudgetItem from "./BudgetItem"

const BudgetList = ({ Budget, handleDelete }) => {
    return (
        <div className="budget-list">
            {Budget.map((item) => (
            <BudgetItem key={item.id} item={item} handleDelete={handleDelete}/>
            ))}
        </div>
    )
}

export default BudgetList
