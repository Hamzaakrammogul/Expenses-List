import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 300.00,
      date: new Date(2023, 2, 7)
    },
    {
      id: "e2",
      title: "New Desk Wooden",
      amount: 250.00,
      date: new Date(2023, 2, 7)
    },
    {
      id: "e3",
      title: "Toilet Paper",
      amount: 20.00,
      date: new Date(2023, 2, 7)
    },
    {
      id: "e4",
      title: "New TV",
      amount: 200.00,
      date: new Date(2023, 2, 7)
    },
    {
      id: "e5",
      title: "Old TV",
      amount: 150.00,
      date: new Date(2023, 2, 7)
    }
  ]
  const addExpenseHandler = expense => {
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
