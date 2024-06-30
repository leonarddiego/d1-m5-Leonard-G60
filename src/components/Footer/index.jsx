import { Container } from "react-bootstrap"
import './style.css'

const Footer = () => {
  return (
    <Container fluid className="bg-secondary py-1 text-light">
      <Container>
        <p className="mb-0 fs-5">HappyCake</p>
        <small className="text-light">Leonard M (2024)</small>
      </Container>
    </Container>
  )
}

export default Footer