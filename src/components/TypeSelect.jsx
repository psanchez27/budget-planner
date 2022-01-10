import { useState } from "react"

const TypeSelect = ({select}) => {
    const [selected, Setselected] = useState('income')

    const handleChange = e => {
        Setselected(e.currentTarget.value)
        select(e.currentTarget.value)
    }

    return (
        <ul className="amount-type">
            <li className="income">
                <input type="radio"
                id="income"
                name="type"
                value='income'
                onChange={handleChange}
                checked={selected === 'income'}/>
                <label htmlFor="income">Income</label>
            </li>
            <li className="expense">
                <input type="radio"
                id="expense"
                name="type"
                value='expense'
                onChange={handleChange}
                checked={selected === 'expense'}/>
                <label htmlFor="expense">Expense</label>
            </li>
        </ul>
    )
}

export default TypeSelect
