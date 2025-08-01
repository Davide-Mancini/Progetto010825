import { Card, Button, Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <>
      <Card className="text-center">
        <Container>
          <Row>
            <Col xs={12} md={4} className="text-start">
              <Card.Title className="my-5">PREVISIONI</Card.Title>
              <Card.Text>Mappa di dettaglio</Card.Text>
              <Card.Text>Segnalazione Fenomeni Intensi</Card.Text>
              <Card.Text>Previsioni Testuali</Card.Text>
              <Card.Text>Suolo</Card.Text>
            </Col>
            <Col xs={12} md={4} className="text-start">
              {" "}
              <Card.Title className="my-5">METEOROLOGIA AERONAUTICA</Card.Title>
              <Card.Text>Carta Significativa - SWLL e SWH</Card.Text>
              <Card.Text>Metar e Taf</Card.Text>
              <Card.Text>Sigmet</Card.Text>
              <Card.Text>Airmet</Card.Text>
            </Col>
            <Col xs={12} md={4} className="text-start">
              <Card.Title className="my-5">MARE E MONTAGNA</Card.Title>
              <Card.Text>Mappa Mare</Card.Text>
              <Card.Text>Avviso di burrasca</Card.Text>
              <Card.Text>Mappa Meteomar</Card.Text>
              <Card.Text>Mappa Montagna</Card.Text>
            </Col>
          </Row>
        </Container>

        <hr />
        <Row>
          <Col>
            <Button variant="primary" className="my-5">
              Scarica su AppStore
            </Button>
          </Col>
          <Col>
            <Button variant="primary" className="my-5">
              Scarica su PlayStore
            </Button>
          </Col>
        </Row>

        <Card.Footer className="text-muted">EPICMETEO 2025</Card.Footer>
      </Card>
    </>
  );
};
export default MyFooter;
