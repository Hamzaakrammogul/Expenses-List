import React, { useState } from "react"
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    /**Using One state instead of multiple States in one file */

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleEventHandler = (event) => {
        console.log(event.target.value);
        setEnteredTitle(event.target.value);
        // setUserInput((preState) => {
        //     return {
        //         ...preState,
        //         enteredTitle: event.target.value
        //     };
        // });
    }

    const amountEventHandler = (event) => {
        console.log(event.target.value)
        setEnteredAmount(event.target.value);
        // setUserInput((preState) => {
        //     return {
        //         ...preState,
        //         enteredAmount: event.target.value
        //     };
        // });
    }

    const dateEventHandler = (event) => {
        console.log(event.target.value);
        setEnteredDate(event.target.value);
        // setUserInput((preState) => {
        //     return {
        //         ...preState,
        //         enteredDate: event.target.value
        //     };
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    };


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type={"text"} value={enteredTitle} onChange={titleEventHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type={"number"} value={enteredAmount} min={'0.01'} max={'100'} onChange={amountEventHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type={"date"} value={enteredDate} min={'2023/01/01'} max={'2025/01/01'} onChange={dateEventHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type={"button"} onClick={props.stopEditing}>Cancel</button>
                <button type={"submit"}>Add Expense</button>
            </div>

        </form>
    );
};
export default ExpenseForm;