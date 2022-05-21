import Expenses from "./components/Expenses";
import ExpenseForm from "./components/NewExpense/ExpenseForm";

const App = () => {
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
        <h1 style={{color: 'white'}}>Expenses</h1>

      <div className="col-lg-3 col-md-2 col-sm-0"></div>
      <div className="col-lg-6 col-md-8 col-sm12">
        <ExpenseForm/>
        <Expenses expenseItems={expenseItems} />
      </div>
      <div className="col-lg-3 col-md-2 col-sm-0"></div>
    </div>
  );
}

export default App;
