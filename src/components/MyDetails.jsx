import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const MyDetails = ({ input }) => {
  const [meteo, setMeteo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getWeather(input);
  }, [input]);

  const getWeather = (inputCitta) => {
    console.log(inputCitta);
    setLoading(true);
    const citta = inputCitta;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${citta},
      IT&units=metric&appid=b10c5672490cca23ef56c58204432a64`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server error: ${res.status}`);
        }
        return res.json();
      })
      .then((arrayMeteo) => {
        console.log(arrayMeteo);
        setMeteo(arrayMeteo);
        setError(null);
      })
      .catch((err) => {
        console.log("ERRORE", err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <h1>Caricamento meteo...</h1>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center mt-5">
        <h1>Errore nel recupero del meteo</h1>
        <p>{error.message}</p>
      </Container>
    );
  }

  if (!meteo) {
    return (
      <Container className="text-center mt-5">
        <h1>Nessun dato meteo disponibile</h1>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <Col className="text-center mt-5">
          <h1>PREVISIONI METEO {meteo.name.toUpperCase()}</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>TEMPERATURA</th>
                <th>METEO</th>
                <th>VENTI</th>
                <th>UMIDITA'</th>
                <th>PERCEPITA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{meteo.main?.temp != null ? `${meteo.main.temp}°` : ""}</td>
                <td>{meteo.weather?.[0]?.description || ""}</td>
                <td>
                  {meteo.wind?.speed != null ? `${meteo.wind.speed} km/h` : ""}
                </td>
                <td>
                  {meteo.main?.humidity != null
                    ? `${meteo.main.humidity}%`
                    : ""}
                </td>
                <td>
                  {meteo.main?.feels_like != null
                    ? `${meteo.main.feels_like}°`
                    : ""}
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default MyDetails;
