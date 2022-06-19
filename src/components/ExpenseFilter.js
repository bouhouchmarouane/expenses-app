export const ExpenseFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onFilteredYearChanged(event.target.value);
  };

  return (
    <div className="row mb-4 form-group">
      <label htmlFor="filteredYear" className="col-md-4 col-form-label">
        Filter by year
      </label>
      <div className="col-md-8">
        <select
          id="filteredYear"
          className="form-control"
          onChange={yearChangeHandler}
          value={props.selected}
        >
          <option value={""}></option>
          {props.years.map(year => <option value={year}>{year}</option>)}
        </select>
      </div>
    </div>
  );
};
export default ExpenseFilter;
