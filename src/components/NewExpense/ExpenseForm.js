import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./ExpenseForm.css";

export const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredPaymentMethod, setEnteredPaymentMethod] = useState('cash');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const paymentMethodChangeHandler = (event) => {
    setEnteredPaymentMethod(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newExpense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
      paymentMethod: enteredPaymentMethod
    }

    console.log(newExpense);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredPaymentMethod('cash');
  };

  return (
    <div className="new-expense-form m-4">
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="title" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="mb-3">
          <label htmlFor="amout" className="form-label">
            Amount
          </label>
          <input type="number" className="form-control" id="amout"  value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="mb-3">
          <label htmlFor="amout" className="form-label">
            Date
          </label>
          <DatePicker
            selected={enteredDate}
            onChange={setEnteredDate}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="payment-method"
              id="credit-card"
              value="credit-card"
              onChange={paymentMethodChangeHandler}
            />
            <label className="form-check-label" htmlFor="credit-card">
              Credit card
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="payment-method"
              id="cash"
              value="cash"
              onChange={paymentMethodChangeHandler}
            />
            <label className="form-check-label" htmlFor="cash">
              Cash
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
