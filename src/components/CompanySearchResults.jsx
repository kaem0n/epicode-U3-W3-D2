import { useEffect } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import Job from './Job'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { saveCompanyJobs } from '../redux/actions'

const CompanySearchResults = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const jobs = useSelector((state) => state.jobs.companyJobs)
  const isLoading = useSelector((state) => state.jobs.isLoading)

  useEffect(() => {
    dispatch(saveCompanyJobs(params))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          <Link to="/" className="btn btn-primary me-2">
            BACK TO HOME
          </Link>
          <Link to="/favorites" className="btn btn-info">
            GO TO FAVORITES
          </Link>
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

export default CompanySearchResults
