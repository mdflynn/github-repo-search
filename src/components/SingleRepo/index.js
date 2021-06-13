import React from "react";
import "./SingleRepo.css";
// Bootstrap Components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleRepo = ({ data, home }) => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={data.owner.avatar_url} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>Created by: {data.owner.login}</Card.Text>
        {data.description && (
          <Card.Text>Description: {data.description}</Card.Text>
        )}
        <Card.Text>Language: {data.language}</Card.Text>
        <Card.Text>Total ⭐'s: {data.stargazers_count}</Card.Text>
        <Button
          variant="warning"
          size="sm"
          className="button-space"
          onClick={() => home("")}
        >
          Back to Results
        </Button>
        <Button
          variant="info"
          target="_blank"
          rel="noreferrer"
          href={data.html_url}
          size="sm"
        >
          View Repo
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleRepo;
