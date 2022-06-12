import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div>
      {props.expenseItems.map(expenseItem => (
        <ExpenseItem
        title={expenseItem.title}
        amount={expenseItem.amount}
        date={expenseItem.date}
        paymentMethod={props.expenseItems[0].paymentMethod}
      />
      ))}
    </div>
  );
}

export default Expenses;