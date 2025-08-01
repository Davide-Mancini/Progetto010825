// import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyHomePage = ({ input, setInput }) => {
  const navigate = useNavigate();
  //   const [input, setInput] = useState("");
  const cittaInput = (e) => {
    e.preventDefault();
    console.log("Cerco meteo per:", input);
  };
  return (
    <>
      <Container className="hero bg-info-subtle rounded-5 p-5 my-5">
        <Row className="row flex-lg-row-reverse align-items-center g-5 py-5  ">
          <Col className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              CERCA IL METEO DI OGNI CITTA!
            </h1>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
          </Col>
          <Col className="col-10 col-sm-8 col-lg-6">
            <Form onSubmit={cittaInput}>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Cerca Meteo Città"
                    className=" mr-sm-2"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    type="submit"
                    onClick={() => {
                      navigate("/mydetails");
                    }}
                  >
                    Cerca
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MyHomePage;
