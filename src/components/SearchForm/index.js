import React, { useState } from "react";
import "./SearchForm.css";
// Bootstrap Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const SearchForm = () => {
  // pass down prop function to pass data to repo views

  const [keywords, setKeywords] = useState([]);

  const handleKeywordInput = (e) => {
    setKeywords(e.target.value);
  };

  const cleanSearchCriteria = () => {
    const removePunctuation = keywords.replaceAll(/[.,:';]/g, "");
    const cleanedData = removePunctuation.split(" ").join("+");
    return cleanedData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // prop function here to pass data to api
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formSearch">
        <Form.Label>Search for repos on GitHub!</Form.Label>
        <Form.Row className="align-items-center">
          <Col xs="5">
            <Form.Control
              type="text"
              placeholder="Enter Keywords"
              onChange={handleKeywordInput}
              value={keywords}
            />
          </Col>
          <Col xs="auto">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Form.Row>
        <Form.Text className="text-muted">
          Try a topic idea, project title, or random keywords!
          <br />
          (Be sure to add a comma after each word)
        </Form.Text>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;