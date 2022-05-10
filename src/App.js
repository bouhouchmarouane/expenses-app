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
    <div className="row">
        <style>{"body { background-color: #202124; }"}</style>
      <div className="col-md-3 col-sm-0"></div>
      <div className="col-md-6 col-sm-12">
        <Expenses expenseItems={expenseItems} />
      </div>
      <div className="col-md-3 col-sm-0"></div>
    </div>
  );
}

export default App;
