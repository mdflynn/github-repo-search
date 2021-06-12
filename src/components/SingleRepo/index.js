import React from "react";
import "./SingleRepo.css";
// Bootstrap Components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleRepo = ({ data }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.owner.avatar_url} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>Created by: {data.owner.login}</Card.Text>
        <Card.Text>Language: {data.language}</Card.Text>
        <Card.Text>Total ⭐'s: {data.stargazers_count}</Card.Text>
        <Button
          variant="primary"
          target="_blank"
          rel="noreferrer"
          href={data.html_url}
        >
          View Repo
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleRepo;
