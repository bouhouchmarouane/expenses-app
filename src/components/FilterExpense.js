export const FilterExpense = (props) => {
  const yearChangeHandler = (event) => {
    props.onFilteredYearChanged(event.target.value);
  }

  return (
    <div className="row">
      <label htmlFor="filteredYear" className="col-md-4 col-form-label">Filtered year</label>
      <select id="filteredYear" className="form-control col-md-8" onChange={yearChangeHandler} value={props.selected}>
        <option value={''}></option>
        <option value={'2020'}>2020</option>
        <option value={'2021'}>2021</option>
        <option value={'2022'}>2022</option>
      </select>
    </div>
  );
};
export default FilterExpense;