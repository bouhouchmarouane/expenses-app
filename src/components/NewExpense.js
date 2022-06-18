import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const showExpenseFormHandler = () => setShowExpenseForm(true);
  const hideExpenseFormHandler = () => setShowExpenseForm(false);

  let content = (
    <button
      type="button"
      class="btn btn-primary"
      onClick={showExpenseFormHandler}
    >
      Add new expense
    </button>
  );

  if (showExpenseForm) {
    content = (
      <ExpenseForm
        onSaveEnteredData={props.onSaveEnteredData}
        onHideExpenseForm={hideExpenseFormHandler}
      />
    );
  }

  return content;
};
export default NewExpense;
