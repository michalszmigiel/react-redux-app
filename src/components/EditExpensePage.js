import React from "react";
const EditExpensePage = props => (
  <div>
    <h1>Edit Expense</h1>
    <p>Editing the expense with id of {props.match.params.id}</p>
  </div>
);

export default EditExpensePage;
