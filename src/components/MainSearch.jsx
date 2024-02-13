import { useState } from 'react'
import { Container, Row, Col, Form, Spinner } from 'react-bootstrap'
import Job from './Job'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchJobs } from '../redux/actions'

const MainSearch = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const jobs = useSelector((state) => state.jobs.search)
  const isLoading = useSelector((state) => state.jobs.isLoading)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(searchJobs(query))
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Link to="/favorites" className="btn btn-info mb-2">
            GO TO FAVORITES
          </Link>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {isLoading ? (
            <div className="text-center mt-5">
              <Spinner variant="primary" animation="border" />
            </div>
          ) : (
            jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
