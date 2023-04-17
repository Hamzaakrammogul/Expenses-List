import { React } from "react";
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter";
import { useState } from 'react';
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [newValue, setValue] = useState('2020');
    const expenseFilter = filtervalue => {
        console.log("In Expenses file" + filtervalue)
        setValue(filtervalue);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === newValue;
    });


    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selectedYear={newValue} expenseFun={expenseFilter} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div>
    );
}
export default Expenses;