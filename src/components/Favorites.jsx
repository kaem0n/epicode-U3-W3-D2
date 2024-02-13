import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.list)
  const dispatch = useDispatch()

  return (
    <Container>
      <h1 className="display-4 mt-3">Favorite Companies</h1>
      <Link to="/" className="btn btn-primary mb-3">
        BACK TO HOME
      </Link>
      <Row className="g-2">
        {favorites.map((el) => (
          <Col xs={3} key={el._id}>
            <div className="p-3 border rounded-3 d-flex align-items-center justify-content-between">
              <Link to={`/${el.company_name}`}>{el.company_name}</Link>
              <Button
                variant="danger"
                onClick={() =>
                  dispatch({ type: 'REMOVE_FAVORITE', payload: el._id })
                }
              >
                REMOVE
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Favorites
