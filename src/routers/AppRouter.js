import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FourOhFour from "../components/FourOhFour";
import Header from "../components/Header";
import HelpPage from "../components/HelpPage";
import EditExpensePage from "../components/EditExpensePage";
import AddExpensePage from "../components/AddExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
