import React, { useEffect, useState } from "react";
import "./SearchResults.css";
// Bootstrap Components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pagination from "react-bootstrap/Pagination";

const SearchResults = ({ data, api }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const viewRepoDetails = (result) => {
    const searchCriteria = `${result.owner.login}/${result.name}`;
    api(searchCriteria);
  };

  // prop function to pass detail info up
  const createResultCards = () => {
    return data.map((result) => {
      return (
        <div className="row" key={result.id}>
          <div className="col-sm-6">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{result.name}</Card.Title>
                <Card.Text>Language: {result.language}</Card.Text>
                <Card.Text>Total ⭐'s: {result.stargazers_count}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => viewRepoDetails(result)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      );
    });
  };

//   useEffect(() => {
//     const updatePage = `${search}&page=${pageNumber}`
//     api(updatePage)
//   }, [pageNumber])

  const viewNextPage = () => {
    setPageNumber((pageNumber) => (pageNumber += 1));
    // call api w/ updated page
    // console.log(pageNumber);
    // const updatePage = `${search}&page=${pageNumber}`
    // api(updatePage)
  };

  const viewPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber((pageNumber) => (pageNumber -= 1));
    // call api w/ updated page
    }
  };

  // use page number to search next page on api

  return (
    <>
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
