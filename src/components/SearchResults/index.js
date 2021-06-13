import React, { useEffect, useState } from "react";
import "./SearchResults.css";
// Components
import ResultCard from "../ResultCard";
// Utilities
import { createSortFilterUrl } from "../../utilities";
// Bootstrap Components
import Pagination from "react-bootstrap/Pagination";
import Dropdown from "react-bootstrap/Dropdown";

const SearchResults = ({ data, api, url }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [dropdownLang, setDropdownLang] = useState([]);
  const [filteredUrl, setFilteredUrl] = useState(url);

  const viewRepoDetails = (result) => {
    const searchCriteria = `${result.owner.login}/${result.name}`;
    api(searchCriteria);
  };

  const createResultCards = () => {
    return data.map((result) => {
      return <ResultCard data={result} viewRepo={viewRepoDetails} />;
    });
  };

  const generateDropdownItems = (repoData) => {
    // filters unique languages
    if (!dropdownLang.length) {
      const languages = repoData.map((repo) => repo.language);
      const sortedLanguages = [...new Set(languages)].sort();
      setDropdownLang(sortedLanguages);
    }

    return dropdownLang.map((language, index) => {
      return (
        <Dropdown.Item
          key={index}
          value={language}
          onClick={(e) => sortAndFilterResults(e)}
        >
          {language}
        </Dropdown.Item>
      );
    });
  };

  const sortAndFilterResults = (e) => {
    // Queries api with selected filter or sort options
    const selectedValue = e.target.getAttribute("value");

    const searchUrl = createSortFilterUrl(selectedValue, url);

    setFilteredUrl(searchUrl);
    api(searchUrl);
  };

  useEffect(() => {
    // Handles next page based on filtered results
    const updatePage = `${filteredUrl}&page=${pageNumber}`;
    api(updatePage);
  }, [pageNumber]);

  const viewNextPage = () => {
    setPageNumber((pageNumber) => (pageNumber += 1));
  };

  const viewPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber((pageNumber) => (pageNumber -= 1));
    }
  };

  return (
    <>
      <div className="button-container">
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            Filter by Language
          </Dropdown.Toggle>
          <Dropdown.Menu>{generateDropdownItems(data)}</Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            Sort Results
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              value={"best-match"}
              onClick={(e) => sortAndFilterResults(e)}
            >
              Best Match
            </Dropdown.Item>
            <Dropdown.Item
              value={"stars"}
              onClick={(e) => sortAndFilterResults(e)}
            >
              Star Rating
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="card-deck">{createResultCards()}</div>

      <Pagination>
        <Pagination.Prev onClick={viewPreviousPage} />
        <Pagination.Item>{pageNumber}</Pagination.Item>
        <Pagination.Next onClick={viewNextPage} />
      </Pagination>
    </>
  );
};

export default SearchResults;
