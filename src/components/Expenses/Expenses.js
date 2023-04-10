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
    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selectedYear={newValue} expenseFun={expenseFilter} />
                {
                    props.expenses.map(
                        expenses =>
                            <ExpenseItem
                                title={expenses.title}
                                amount={expenses.amount}
                                date={expenses.date} />
                    )
                }
                {/* <ExpenseItem
                    title={props.expenses[0].title}
                    amount={props.expenses[0].amount}
                    date={props.expenses[0].date}>
                </ExpenseItem>
                <ExpenseItem
                    title={props.expenses[1].title}
                    amount={props.expenses[1].amount}
                    date={props.expenses[1].date}>
                </ExpenseItem>
                <ExpenseItem
                    title={props.expenses[2].title}
                    amount={props.expenses[2].amount}
                    date={props.expenses[2].date}>
                </ExpenseItem>
                <ExpenseItem
                    title={props.expenses[3].title}
                    amount={props.expenses[3].amount}
                    date={props.expenses[3].date}>
                </ExpenseItem> */}
            </Card>
        </div>
    );
}
export default Expenses;