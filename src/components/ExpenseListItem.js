import React from "react";
import { removeExpense } from "../actions/expenses";
import { connect } from "react-redux";

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
  <div>
    <h3>description: {description}</h3>
    <p>amount:{amount}</p>
    <p>created at: {createdAt}</p>
    <button onClick={() => dispatch(removeExpense({ id }))}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);
