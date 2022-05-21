import "./ExpenseForm.css";

export const ExpenseForm = () => {
  return (
    <div className="new-expense-form m-4">
      <form>
        <div class="mb-3">
          <label for="title" class="form-label">
            Title
          </label>
          <input type="text" class="form-control" id="title" />
        </div>
        <div class="mb-3">
          <label for="amout" class="form-label">
            Amount
          </label>
          <input type="number" class="form-control" id="amout" />
        </div>
        <div class="mb-3">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="payment-method"
              id="credit-card"
            />
            <label class="form-check-label" for="credit-card">
              Credit card
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="payment-method"
              id="cash"
            />
            <label class="form-check-label" for="cash" checked >
              Cash
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
