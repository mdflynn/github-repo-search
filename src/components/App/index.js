import React from "react";
import "./App.css";
// Components
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";
import SingleRepo from "../SingleRepo";
import MainPage from "../MainPage/MainPage";
// API
import { searchRepo } from "../../apiCalls";
// Router
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <SearchForm />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/search-results" component={SearchResults} />
        <Route path="/repo-details" component={SingleRepo} />
      </Switch>
    </>
  );
}

export default App;
