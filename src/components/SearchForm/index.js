import React, { useState } from "react";
import "./SearchForm.css";
// Bootstrap Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { searchRepo } from "../../apiCalls";

const SearchForm = () => {
  // searchRepo()
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  const [keywords, setKeywords] = useState("");
  const [username, setUsername] = useState("");

  const handleKeywordInput = (e) => {
    setKeywords(e.target.value)
  }

  const handleUsernameInput = (e) => {
    setUsername(e.target.value)
  }

  return (
    <Form>
      <Form.Group controlId="formSearch">
        <Form.Label>Search for repos on GitHub!</Form.Label>
        <Form.Row className="align-items-center">
          <Col xs="3">
            <Form.Control type="text" placeholder="Enter Keywords" onChange={handleKeywordInput} value={keywords}/>
          </Col>
          <Col xs="2">
            <Form.Control type="text" placeholder="GitHub Username (optional)" onChange={handleUsernameInput} value={username} />
          </Col>
          <Col xs="auto">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Form.Row>
        <Form.Text className="text-muted">
          Try a topic idea, project title, or a username!
        </Form.Text>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;
