import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div>
      {props.expenseItems.map(expenseItem => (
        <ExpenseItem
        key={expenseItem.id}
        title={expenseItem.title}
        amount={expenseItem.amount}
        date={expenseItem.date}
        paymentMethod={expenseItem.paymentMethod}
      />
      ))}
    </div>
  );
}

export default Expenses;