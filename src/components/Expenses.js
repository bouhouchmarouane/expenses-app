import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div>
      <ExpenseItem
        title={props.expenseItems[0].title}
        amount={props.expenseItems[0].amount}
        date={props.expenseItems[0].date}
        paymentMethod={props.expenseItems[0].paymentMethod}
      />
    </div>
  );
}

export default Expenses;