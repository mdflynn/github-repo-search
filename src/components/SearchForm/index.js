import React, { useState } from "react";
import "./SearchForm.css";
// Bootstrap Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const SearchForm = ({ api, clear }) => {
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
    const searchCriteria = cleanSearchCriteria();
    api(searchCriteria);
  };

  const clearSearch = () => {
    setKeywords([]);
    clear();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formSearch">
        <Form.Label style={{fontSize: "25px"}}>Search for repos on GitHub!</Form.Label>
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
            <Button variant="primary" type="submit" className="button-space">
              Submit
            </Button>
            {keywords.length > 0 && (
              <Button
                variant="warning"
                type="submit"
                size="sm"
                onClick={clearSearch}
              >
                Clear
              </Button>
            )}
          </Col>
        </Form.Row>
        <Form.Text className="text-muted">
          Try a topic idea, project title, or random keywords!
        </Form.Text>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;
