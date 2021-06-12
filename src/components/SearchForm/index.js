import React from "react";
// Bootstrap Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SearchForm = () => {
  return (
    <Form>
      <Form.Group controlId="formSearch">
        <Form.Label>Search repos on GitHub!</Form.Label>
        <Form.Control type="text" placeholder="Enter search criteria" />
        <Form.Text className="text-muted">
          Try a username, project title, or a topic!
        </Form.Text>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;
