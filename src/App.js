import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm";
import FilterExpense from "./components/FilterExpense";
import { useState } from "react";
import Card from "./components/Card";

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

  const [filteredYear, setFilteredYear] = useState('2021');

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const newExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(newExpenseData);
  };

  const filteredYearchangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  }

  return (
    <div className="row">
        <style>{"body { background-color: #202124; }"}</style>
        <h1 style={{color: 'white'}}>Expenses</h1>

      <div className="col-lg-3 col-md-2 col-sm-0"></div>
      <div className="col-lg-6 col-md-8 col-sm12">
        <ExpenseForm onSaveEnteredData={saveExpenseDataHandler}/>
        <Card>
          <FilterExpense onFilteredYearChanged={filteredYearchangeHandler} selected={filteredYear}/>
          <Expenses expenseItems={expenseItems} />
        </Card>
      </div>
      <div className="col-lg-3 col-md-2 col-sm-0"></div>
    </div>
  );
}

export default App;
