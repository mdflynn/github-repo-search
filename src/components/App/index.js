import React, { useState } from "react";
import "./App.css";
// Components
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";
import SingleRepo from "../SingleRepo";
import MainPage from "../MainPage";
// API
import { searchAllRepos } from "../../apiCalls";
// Router
import { Route, Switch } from "react-router-dom";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [repoView, setRepoView] = useState({});

  const searchRepos = (searchCriteria) => {
    searchAllRepos(searchCriteria)
      .then((res) => res.json())
      .then((data) => setSearchResults(data.items));
  };

  return (
    <>
      <SearchForm api={searchRepos} />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/search-results" component={SearchResults} />
        <Route path="/repo-details" component={SingleRepo} />
      </Switch>
    </>
  );
}

export default App;
