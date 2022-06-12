import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div>
      {props.expenseItems.filter(expenseItem => expenseItem.date.getFullYear() == props.filterYearSelected || props.filterYearSelected == '')
      .map(expenseItem => (
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