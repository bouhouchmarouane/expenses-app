import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm";
import FilterExpense from "./components/FilterExpense";
import { useState } from "react";
import Card from "./components/Card";

const INITIAL_EXPENSES = [
  {
    id: 1,
    title: "Car  insurance",
    amount: 4200,
    date: new Date(),
    paymentMethod: "Credit card",
  },
  {
    id: 2,
    title: "Gas",
    amount: 300,
    date: new Date(),
    paymentMethod: "check",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const [filteredYear, setFilteredYear] = useState('2021');

  const addExpenseDataHandler = (enteredExpenseData) => {
    const newExpenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData
    };
    setExpenses([newExpenseData, ...expenses]);
    console.log([newExpenseData, ...expenses]);
  };

  const filteredYearchangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  return (
    <div className="row">
        <style>{"body { background-color: #202124; }"}</style>
        <h1 style={{color: 'white'}}>Expenses</h1>

      <div className="col-lg-3 col-md-2 col-sm-0"></div>
      <div className="col-lg-6 col-md-8 col-sm12">
        <ExpenseForm onSaveEnteredData={addExpenseDataHandler}/>
        <Card>
          <FilterExpense onFilteredYearChanged={filteredYearchangeHandler} selected={filteredYear}/>
          <Expenses expenseItems={expenses} />
        </Card>
      </div>
      <div className="col-lg-3 col-md-2 col-sm-0"></div>
    </div>
  );
}

export default App;
