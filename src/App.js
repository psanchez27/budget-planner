import {v4 as uuidv4} from 'uuid'
import { useState } from "react"
import { useEffect } from 'react'
import BudgetData from './data/Budgetdata'
import Header from "./components/Header"
import BudgetList from "./components/BudgetList"
import BudgetForm from "./components/BudgetForm"
import BudgetNumbers from './components/BudgetNumbers'

const App = () => {
    const [budget, setBudget] = useState(BudgetData)

    useEffect(() => {
        const data = localStorage.getItem('budgetData');
        if(data){
            setBudget(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('budgetData', JSON.stringify(budget))
    })

    const deleteItem = (id) => {
        console.log(id)
        if(window.confirm('Are you sure you want to delete?')){
            setBudget(budget.filter((item) => item.id !== id))
        }
    }

    const addBudget = (newBudget) => {
        newBudget.id = uuidv4()
        newBudget.amt = Number(newBudget.amt)
        setBudget([newBudget, ...budget])
    }




    return (
        <div className="container">
            <Header />
            <BudgetForm handleAdd={addBudget}/>
            <BudgetNumbers budget={budget}/>
            <BudgetList Budget={budget} handleDelete={deleteItem}/>
        </div>
    )
}

export default App
