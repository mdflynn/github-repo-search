import React, { useState } from "react";
import "./App.css";
// Components
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";
import SingleRepo from "../SingleRepo";
import MainPage from "../MainPage";
// API
import { searchGitHubApi } from "../../apiCalls";
// Router
import { Route, Switch } from "react-router-dom";

function App() {
  const [fetchedSearchResults, setFetchedSearchResults] = useState([]);
  // clean data on click
  const [repoInfo, setRepoInfo] = useState({});

  const searchRepos = (searchCriteria) => {
    // dynamic api call based on criteria type
    let baseUrl = searchCriteria.name
      ? "repos/"
      : "search/repositories?&sort=stars&order=desc&q=";

    searchGitHubApi(baseUrl, searchCriteria)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.items) {
          setFetchedSearchResults(data.items);
        } else {
          setRepoInfo(data);
        }
      });
  };

  return (
    <>
      {fetchedSearchResults.length > 0 && console.log(fetchedSearchResults)}
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
