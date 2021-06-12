import React from "react";
// Bootstrap Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const SearchForm = () => {
  return (
    <Form>
      <Form.Group controlId="formSearch">
        <Form.Label>Search repos on GitHub!</Form.Label>
        <Form.Row className="align-items-center">
          <Col xs="6">
            <Form.Control type="text" placeholder="Enter search criteria" />
          </Col>
          <Col xs="auto">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Form.Row>

        <Form.Text className="text-muted">
          Try a username, project title, or a topic!
        </Form.Text>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;
