import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExpense } from "../actions/expenses";

const EditExpensePage = props => (
  <div>
    <h1>Edit Expense</h1>
    <p>Editing the expense with id of {props.match.params.id}</p>
    <ExpenseForm
      expense={props.expense}
      onSubmit={expense => {
        props.dispatch(editExpense(props.match.params.id, expense));
        props.history.push("/");
      }}
    />
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditExpensePage);
