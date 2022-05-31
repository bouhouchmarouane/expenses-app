export const FilterExpense = (props) => {
    const yearChangeHandler = (event) => {
        props.onFilteredYearChanged(event.target.value);
    }

  return (
    <div>
      <select className="form-control" onChange={yearChangeHandler} value={props.selected}>
        <option value={'2020'}>2020</option>
        <option value={'2021'}>2021</option>
      </select>
    </div>
  );
};
export default FilterExpense;