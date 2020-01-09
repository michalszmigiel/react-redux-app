import React from "react";
import ExpenseForm from "./ExpenseForm";

const EditExpensePage = props => (
  <div>
    <h1>Edit Expense</h1>
    <p>Editing the expense with id of {props.match.params.id}</p>
    <ExpenseForm />
  </div>
);

export default EditExpensePage;
