import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import configureStore from "./store/configureStore";
import "./styles/styles.scss";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";

const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addExpense({ description: "water bill", amount: 150 }));
store.dispatch(addExpense({ description: "gas bill", amount: 20 }));
store.dispatch(addExpense({ description: "food bill", amount: 200 }));
store.dispatch(addExpense({ description: "phone bill", amount: 50 }));
store.dispatch(addExpense({ description: "net bill", amount: 100 }));
store.dispatch(addExpense({ description: "drink bill", amount: 70 }));
store.dispatch(addExpense({ description: "rent bill", amount: 1500 }));

store.dispatch(setTextFilter(""));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
