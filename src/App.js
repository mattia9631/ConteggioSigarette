import './App.css';
import Summary from './Molecules/Overall/Summary';
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Container>
      <Row>
      <Col>
      <Summary></Summary>
      </Col>
      </Row>
    </Container>
  );
}

export default App;
