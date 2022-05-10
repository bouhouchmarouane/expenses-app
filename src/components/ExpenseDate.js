function ExpenseDate(props) {
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const year = props.date.getFullYear();

    return (
      <div className="card text-white bg-dark text-center col-md-4 col-xs-12">
        <div className="card-body">
          <h5>{day}</h5>
          <h5>{month}</h5>
          <h5>{year}</h5>
        </div>
      </div>
    );
}

export default ExpenseDate;