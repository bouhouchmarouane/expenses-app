import ExpenseCard from "./ExpenseCard";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    const title = props.title;
    const amount = props.amount;
    const date = props.date;
    const paymentMethod = props.paymentMethod;

    return (
      <ExpenseCard>
        <div className="card-body row m-0 p-0" style={{padding: 0}}>
          <ExpenseDate date={date} />
          <div className="card-title col-xl-6 col-lg-7">
            <h2>{title}</h2>
            <h3>{amount} MAD</h3>
            <h4>{paymentMethod}</h4>
          </div>
          <div className="card-body col-xl-3 col-lg-12">
            <button className="btn btn-primary">Change Title</button>
          </div>
        </div>
      </ExpenseCard>
    );
}

export default ExpenseItem;