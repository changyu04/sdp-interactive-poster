import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Taskbar() {
  return (
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/Home">
            <img style={{width:24,height:35}} src={require('../assets/scblogo2.png')}></img>
            {" "}
            <img style={{width:35,height:40}} src={require('../assets/nuslogo2.png')}></img>
            {" "}SCB x NUS</Navbar.Brand>
          <Nav>
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Motivations">Motivations</Nav.Link>
            <Nav.Link href="/Methodology">Methodology</Nav.Link>
            <Nav.Link href="/Results">Results</Nav.Link>
            <Nav.Link href="/Calculator">Emissions Calculator</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Taskbar;
