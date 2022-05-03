import Expenses from "./components/Expenses";

function App() {
  const expenseItems = [
    {
      title: "Car  insurance",
      amount: 4200,
      date: new Date(),
    },
    {
      title: "Gas",
      amount: 300,
      date: new Date(),
    },
  ];

  return (
    <div>
      <h1>Hello</h1>
      <Expenses expenseItems={expenseItems}/>
    </div>
  );
}

export default App;
