//Component in react just a javascript function
import React from "react";
import { useState } from "react";
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpensseDate from './ExpenseDate';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);
    const onClickedHandler = () => {
        setTitle("Updated!");
        console.log("it is what it is");
    }
    return (
        <Card className='expense-item'>
            <ExpensseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={onClickedHandler}>Change title</button>
        </Card>
    );
}
export default ExpenseItem;