import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const MyDetails = ({ input }) => {
  const [meteo, setMeteo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [meteo5, setMeteo5] = useState([]);

  useEffect(() => {
    getWeather(input);
    {
      /* avvio la funzione che fa la fetch con un use effect collegato allo stato passato come props input in app che prende il valore dell'input di ricerca*/
    }
  }, [input]);

  const getWeather = (inputCitta) => {
    console.log(inputCitta);
    setLoading(true);
    const citta = inputCitta;
    {
      /*faccio la fetch per recuperare i dati metereologici di adesso */
    }
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${citta},  
      IT&units=metric&appid=b10c5672490cca23ef56c58204432a64`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then((arrayMeteo) => {
        console.log(arrayMeteo);
        setMeteo(arrayMeteo);
        setError(null);
        setLoading(false);
        const lat = arrayMeteo.coord.lat;
        const lon = arrayMeteo.coord.lon;
        console.log(lat, lon);
        {
          /*faccio una fetch nel then della prima fetch cosi posso recuperare i dati relativi alla longitudine e latitudine e li salvo in 2 costanti che poi andrò
          ad inserire nella seconda fecth per recuperare i dati delle previsioni dei prossimi 5 giorni */
        }
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=b10c5672490cca23ef56c58204432a64`
        )
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error();
            }
          })
          .then((arrayFiveDays) => {
            setMeteo5(arrayFiveDays); //setto lo stato con l'array ricevuto dalla seconda fetch
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log("ERRORE", err);
        setError(err);
      });
  };
  // metto messaggidi errore e di caricamento
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
          <h1>
            PREVISIONI METEO{" "}
            <span className=" fw-bolder ">{meteo.name.toUpperCase()}</span>
          </h1>
          <Table bordered hover className=" border-info my-5 ">
            <thead>
              <tr>
                <th>TEMPERATURA</th>
                <th>METEO</th>
                <th>VENTO</th>
                <th>UMIDITA'</th>
                <th>PERCEPITA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {" "}
                {/*inserisco i dati della prima fetch */}
                <td>{meteo.main.temp}</td>
                <td>{meteo.weather[0].description || ""}</td>
                <td>{meteo.wind.speed} km/h</td>
                <td>{meteo.main.humidity}%</td>
                <td>{meteo.main.feels_like}°`</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h1>PROSSIMI 5 GIORNI</h1>
          <Table bordered hover className=" border-info my-5 ">
            <thead>
              <tr>
                <th>TEMPERATURA</th>
                <th>METEO</th>
                <th>VENTO</th>
                <th>UMIDITA'</th>
                <th>PERCEPITA</th>
              </tr>
            </thead>
            <tbody>
              {/* filtro i dati della seconda fecth con operatore modulo se l'indice diviso 8 da resto uguale a 0  */}
              {meteo5.list
                ?.filter((inutile, indice) => indice % 8 === 0)
                .map((giorno) => {
                  console.log(giorno);
                  return (
                    <tr key={giorno.dt}>
                      <td>{giorno.main.temp}°</td>
                      <td>{giorno.weather[0].description}</td>
                      <td>{giorno.wind.speed} km/h</td>
                      <td>{giorno.main.humidity}%</td>
                      <td>{giorno.main.feels_like}°</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default MyDetails;
