import React,{useRef} from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "../App.css";


export const SearchBar = (props) => {
  const inputEl=useRef("");


  const getSearchTerm=()=>{
  props.searchKeyword(inputEl.current.value);
  };

  function submitHandler(e) {
    e.preventDefault();
}
  return (
    <Form onSubmit={submitHandler}>
      <Row>
        <Col xs="auto">
          <Form.Control
            className="mb-2 searchBarColot"
            id="inlineFormInput"
            placeholder="Enter the language"
            value={props.term}
            ref={inputEl}
            onChange={getSearchTerm}
          />
        </Col>
      </Row>
    </Form>
  );
};
export default SearchBar;
