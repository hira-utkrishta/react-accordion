import React, { useState } from "react";

import "./style.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
  const [sectionData, setSectionData] = useState([]);

  const [data, setData] = useState({
    sectionhead: "",
    sectiondetails: "",
  });

  const handleEntries = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSectionData([...sectionData, data]);
    setData({
      sectionhead: "",
      sectiondetails: "",
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-md-3 mt-5">
          <Card className="shadow-lg p-3 mb-5 bg-white rounded">
            <Card.Title>
              <h3 className=" text-decoration-underline mt-5">Add Section</h3>
            </Card.Title>
            <Card.Body>
              <Form>
                <Row>
                  <Col>
                    <Form.Group className="col-sm-12" controlId="section1">
                      <Form.Label>
                        <h5>Section Header</h5>
                      </Form.Label>
                      <Form.Control
                        name="sectionhead"
                        type="text"
                        value={data.sectionhead}
                        onChange={handleEntries}
                        controlId="section1"
                        className="form-control"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="col-sm-12" controlId="section2">
                      <Form.Label>
                        <h5>Section Details</h5>
                      </Form.Label>

                      <InputGroup>
                        <Form.Control
                          name="sectiondetails"
                          type="text"
                          value={data.sectiondetails}
                          onChange={handleEntries}
                          controlId="section2"
                          className="form-control"
                          as="textarea"
                          aria-label="With textarea"
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>
                <div className="mb-2 mt-3">
                  <Button
                    onClick={handleSubmit}
                    variant="primary"
                    size="md"
                    style={{ fontWeight: "bold" }}
                  >
                    ADD SECTION
                  </Button>{" "}
                  {/* Rest of your code */}
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
      {sectionData.length > 0 && (
        <div className="row">
          <div className="col-sm-6 offset-md-3 mt-5">
            {sectionData.map((i, index) => (
              <Accordion key={index}>
                <Accordion.Item eventKey={index.toString()}>
                  <Accordion.Header>{i.sectionhead}</Accordion.Header>
                  <Accordion.Body>{i.sectiondetails}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
