import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {

  const DummyData = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 300.00,
      date: new Date(2022, 2, 7)
    },
    {
      id: "e2",
      title: "New Desk Wooden",
      amount: 250.00,
      date: new Date(2019, 2, 7)
    },
    {
      id: "e3",
      title: "Toilet Paper",
      amount: 20.00,
      date: new Date(2022, 2, 7)
    },
    {
      id: "e4",
      title: "New TV",
      amount: 200.00,
      date: new Date(2021, 2, 7)
    },
    {
      id: "e5",
      title: "Old TV",
      amount: 150.00,
      date: new Date(2021, 2, 7)
    }
  ];
  const [expenses, setexpenses] = useState(DummyData);
  const addExpenseHandler = expense => {
    setexpenses((prevState)=>{
      return [expense, ...prevState];
    });
    console.log("In App.js");
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}
export default App;