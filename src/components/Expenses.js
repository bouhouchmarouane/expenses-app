import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const filteredExpenses = props.expenseItems.filter(
    (expenseItem) =>
      expenseItem.date.getFullYear().toString() === props.filterYearSelected ||
      props.filterYearSelected === ""
  );

  let expensesContent = <p>No expenses found.</p>;

  if(filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expenseItem) => (
      <ExpenseItem
        key={expenseItem.id}
        title={expenseItem.title}
        amount={expenseItem.amount}
        date={expenseItem.date}
        paymentMethod={expenseItem.paymentMethod}
      />
    ));
  }
  return (
    <div>
      {expensesContent}
    </div>
  );
};

export default Expenses;
