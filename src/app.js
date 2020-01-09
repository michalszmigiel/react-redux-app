import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import configureStore from "./store/configureStore";
import "./styles/styles.scss";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import AppRouter from "./routers/AppRouter";

const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addExpense({ description: "water bill", amount: 150 }));

store.dispatch(addExpense({ description: "gas bill", amount: 200 }));

store.dispatch(setTextFilter("bill"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById("app"));
