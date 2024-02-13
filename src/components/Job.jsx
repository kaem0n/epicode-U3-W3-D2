import { Row, Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const Job = ({ data }) => {
  const dispatch = useDispatch()
  const params = useParams()

  return (
    <Row
      className="mx-0 mt-3 p-3 align-items-center"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9} className="d-flex justify-content-between align-items-center">
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
        {!params.company && (
          <Button
            variant="secondary"
            className="me-2"
            onClick={() =>
              dispatch({ type: 'ADD_TO_FAVORITES', payload: data })
            }
          >
            Add company to Favorites
          </Button>
        )}
      </Col>
    </Row>
  )
}

export default Job
