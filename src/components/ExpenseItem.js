import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
    const title = props.title;
    const amount = props.amount;
    const date = props.date;
    const paymentMethod = props.paymentMethod;
    
    return (
      <div className="card m-4">
        <div className="card-body row" style={{padding: 0}}>
          <ExpenseDate date={date} />
          <div className="card-title col-md-8 col-xs-12">
            <h2>{title}</h2>
            <h3>{amount} MAD</h3>
            <h4>{paymentMethod}</h4>
          </div>
        </div>
      </div>
    );
}

export default ExpenseItem;