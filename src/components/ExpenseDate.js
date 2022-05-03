function ExpenseDate(props) {
    const day = props.date.getDate();
    const month = props.date.getMonth();
    const year = props.date.getYear();
    
    return (
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
    );
}

export default ExpenseDate;