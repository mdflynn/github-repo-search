import React from "react";
import "./ResultCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ResultCard = ({ data, viewRepo }) => {
  return (
    <div className="row" key={data.id}>
      <div className="col-sm-6">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>Language: {data.language}</Card.Text>
            <Card.Text>Total ⭐'s: {data.stargazers_count}</Card.Text>
            <Button variant="primary" onClick={() => viewRepo(data)}>
              View Details
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ResultCard;
