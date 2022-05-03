import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
    const title = props.title;
    const amount = props.amount;
    const date = props.date;

    return (
      <div className="card m-3">
        <div className="card-header">{title}</div>
        <div className="card-body">
          <h5 className="card-title">{amount} dh</h5>
          <ExpenseDate date={date}/>
        </div>
      </div>
    );
}

export default ExpenseItem;