import React from "react";
// Bootstrap Components
import Card from "react-bootstrap/Card";

const ErrorPage = ({ statusCode }) => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={`https://http.cat/${statusCode}`} />
      <Card.Body>
        <Card.Title>Error: {statusCode}</Card.Title>
        <Card.Text>
          Please Try Again
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ErrorPage;
