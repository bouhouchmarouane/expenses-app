import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm";
import { ExpenseFilter } from "./components/ExpenseFilter";
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
  const [filteredYear, setFilteredYear] = useState("");
  var filteredExpenses = [...expenses];

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
          <ExpenseForm onSaveEnteredData={addExpenseDataHandler} />
        </Card>
        <Card>
            <ExpenseFilter
              onFilteredYearChanged={filteredYearchangeHandler}
              selected={filteredYear}
            />
          <Expenses
            expenseItems={filteredExpenses}
            filterYearSelected={filteredYear}
          />
        </Card>
      </div>
      <div className="col-lg-3 col-md-2 col-sm-0"></div>
    </div>
  );
};

export default App;
