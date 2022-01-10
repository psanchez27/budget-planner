const BudgetNumbers = ({budget}) => {

    let income = budget.filter((item) => item.type === 'income').reduce((acc, cur) => {
        return acc + cur.amt
    },0)

    let expenses = budget.filter((item) => item.type === 'expense').reduce((acc, cur) => {
        return acc + cur.amt
    },0)

    let remainder = Number(income) - Number(expenses)
    
    return (
        <ul className="budget-numbers">
            <li>
                Income Total: <span className="income-total">${income}</span>
            </li>
            <li>
                Remainder: <span className="remainder">${remainder}</span>
            </li>
        </ul>
    )
}

export default BudgetNumbers
