const ExpenseCard = (props) => {
    return(
      <div className="card mb-2">
          <div className="card-body p-0">
              {props.children}
          </div>
      </div>  
    );
}
export default ExpenseCard;