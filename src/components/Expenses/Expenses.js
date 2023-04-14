import { React } from "react";
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from "./ExpenseFilter";
import { useState } from 'react';

function Expenses(props) {
    const [newValue, setValue] = useState('2020');
    const expenseFilter = filtervalue => {
        console.log("In Expenses file" + filtervalue)
        setValue(filtervalue);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === newValue;
    });
    
    let expensesContent = <p>No expense found!</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(
            (expenses) => (
                <ExpenseItem
                    key={expenses.id}
                    title={expenses.title}
                    amount={expenses.amount}
                    date={expenses.date} />
            ));
    }
    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selectedYear={newValue} expenseFun={expenseFilter} />
                {expensesContent}
            </Card>
        </div>
    );
}
export default Expenses;