import React from 'react'
import { Col, Card, ListGroup, Row, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const CountryCard = ({country}) => {
  return (
    <Container>
            <Col className="mt-5">
              <LinkContainer
                to={`/countries/${country.name.common}`}
                state={{ country: country }}
              >
                <Card className="h-100">
                  <Card.Body className="d-flex flex-column">
                    <Card.Img src={country.flags.svg} alt={country.name.common}/>
                    <Card.Title>{country.name.common}</Card.Title>
                    <Card.Subtitle className="mb-5 text-muted">
                      {country.capital}
                    </Card.Subtitle>
                    <ListGroup
                      variant="flush"
                      className="flex-grow-1 justify-content-end"
                    >
                      <ListGroup.Item>
                        <i className="bi bi-translate me-2">
                          {Object.values(country.languages ?? {}).join(", ")}
                        </i>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <i className="bi bi-cash-coin me-2">
                          {Object.values(country.currencies || {})
                            .map((currency) => currency.name)
                            .join(", ")
                          }
                        </i>
                      </ListGroup.Item>

                      <ListGroup.Item>
                        <i className="bi bi-people me-2">
                          {country.population.toLocaleString()}
                        </i>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </LinkContainer>
            </Col>
    </Container>
  )
}

export default CountryCard