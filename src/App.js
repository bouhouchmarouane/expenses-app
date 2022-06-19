import Expenses from "./components/Expenses";
import { ExpenseFilter } from "./components/ExpenseFilter";
import { useState } from "react";
import Card from "./components/Card";
import NewExpense from "./components/NewExpense";
import Chart from "./components/Chart";

const INITIAL_EXPENSES = [
  {
    id: 1,
    title: "Car insurance",
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
  {
    id: 3,
    title: "Test1",
    amount: 10,
    date: new Date(2021,11,5),
    paymentMethod: "check",
  },
  {
    id: 4,
    title: "Test2",
    amount: 4000,
    date: new Date(2022, 11, 5),
    paymentMethod: "check",
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const [filteredYear, setFilteredYear] = useState("2021");

  const addExpenseDataHandler = (enteredExpenseData) => {
    const newExpenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    setExpenses([newExpenseData, ...expenses]);
  };

  const filteredYearchangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    setExpenses(expenses);
  };

  return (
    <div className="row">
      <style>{"body { background-color: #202124; }"}</style>

      <h1 style={{ color: "white" }}>Expenses</h1>

      <div className="col-lg-3 col-md-2 col-sm-0"></div>
      <div className="col-lg-6 col-md-8 col-sm12">
        <Card>
          <NewExpense onSaveEnteredData={addExpenseDataHandler} />
        </Card>
        <Card>
          <Chart year={filteredYear} data={expenses}/>
        </Card>
        <Card>
          <ExpenseFilter
            onFilteredYearChanged={filteredYearchangeHandler}
            selected={filteredYear}
          />
          <Expenses expenseItems={expenses} filterYearSelected={filteredYear} />
        </Card>
      </div>
      <div className="col-lg-3 col-md-2 col-sm-0"></div>
    </div>
  );
};

export default App;
