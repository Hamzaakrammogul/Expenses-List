//Component in react just a javascript function
import './ExpenseItem.css';
import ExpensseDate from './ExpenseDate';
function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <ExpensseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}
export default ExpenseItem;