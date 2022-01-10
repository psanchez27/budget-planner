import Card from './shared/Card'
import Button from './shared/Button'
import TypeSelect from './TypeSelect'
import { useState } from 'react'

const BudgetForm = ({handleAdd}) => {
    const [name, setName] = useState('')
    const [amt, setAmt] = useState('')
    const [type, setType] = useState('income')

    const handleAmtChange = e => {
        setAmt(e.target.value)
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(amt.trim().length > 0 && name.trim().length > 2 && amt > 0){
            console.log(amt)
            const newBudget = {
                name,
                amt,
                type
            }
            setName('')
            setAmt('')
            handleAdd(newBudget)
        }
    }

    return (
        <Card type={'form'}>
            <form onSubmit={handleSubmit}>
                <h2>Enter Amount</h2>
                <TypeSelect select={(type) => setType(type)}/>
                <div className="input-group">
                    <input onChange={handleNameChange} type="text" value={name} placeholder='Description'/>
                </div>
                <div className="input-group">
                    <input onChange={handleAmtChange} type="number" value={amt} placeholder='Amount'/>
                </div>
                <Button version={'primary'} type='submit'>Add</Button>
            </form>
        </Card>
    )
}

export default BudgetForm
