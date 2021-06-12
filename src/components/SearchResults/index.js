import React from "react";
import "./SearchResults.css";
// Bootstrap Components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SearchResults = ({ data }) => {
  const createResultCards = () => {
    return data.map((result) => {
      return (
        <div className="row">
          <div className="col-sm-6">
            <Card style={{ width: "18rem" }} key={result.id}>
              <Card.Img variant="top" src={result.owner.avatar_url} />
              <Card.Body>
                <Card.Title>{result.name}</Card.Title>
                <Card.Text>Language: {result.language}</Card.Text>
                <Card.Text>Total ⭐'s: {result.stargazers_count}</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      );
    });
  };

  return <div className="card-deck">{createResultCards()}</div>;
};

export default SearchResults;
