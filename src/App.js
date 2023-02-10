import Expenses from "./components/Expenses";

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
    }
  ]
  return (
    <div>
      <h2>Let's get start with react!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
