import Expenses from "./components/Expenses";

function App() {
  const expenseItems = [
    {
      title: "Car  insurance",
      amount: 4200,
      date: new Date(),
      paymentMethod: "Credit card",
    },
    {
      title: "Gas",
      amount: 300,
      date: new Date(),
      paymentMethod: "check",
    },
  ];

  return (
    <div>
      <Expenses expenseItems={expenseItems}/>
    </div>
  );
}

export default App;
