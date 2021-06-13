import React, { useState } from "react";
import "./App.css";
// Components
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";
import SingleRepo from "../SingleRepo";
import MainPage from "../MainPage";
// API
import { createUrl, searchGitHubApi } from "../../apiCalls";

const App = () => {
  const [fetchedSearchResults, setFetchedSearchResults] = useState([]);
  // clean data on click
  const [repoInfo, setRepoInfo] = useState("");

  const [userSearch, setUserSearch] = useState("");

  // func to filter by language
  // func to search by updated page
  // func to sort by stars, ascend, desc

  const searchRepos = (searchCriteria) => {
    // dynamic api call based on criteria type
    const url = createUrl(searchCriteria);

    if (!userSearch) {
      setUserSearch(url);
    }
    searchGitHubApi(url)
    
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        if (data.items) {
          setFetchedSearchResults(data.items);
        } else {
          setRepoInfo(data);
        }
      });
  };

  return (
    <>
      <SearchForm api={searchRepos} />
      {fetchedSearchResults.length > 0 && !repoInfo && (
        <SearchResults
          api={searchRepos}
          data={fetchedSearchResults}
          url={userSearch}
        />
      )}
      {repoInfo && <SingleRepo data={repoInfo} />}
    </>
  );
};

export default App;
