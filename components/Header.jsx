import {Container,Nav, Navbar,NavDropdown,Form,InputGroup} from "react-bootstrap";
import {BsSearch, BsCart2} from "react-icons/bs";
import IconBadge from './iconBadge'

import Logo from '/shop4Africa.svg'
function Header() {
  console.log('logo', Logo);
  return (
    <header>
         <Navbar expand="lg"  bg="dark" data-bs-theme="dark" className="pt-3">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo}/>Shop4Africa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Form inline>
        <InputGroup >
          <InputGroup.Text className="bg-transparent border-light" style={{borderTopLeftRadius:'50rem'
            ,borderBottomLeftRadius:'50rem',borderRight:0}}><BsSearch/></InputGroup.Text>
          <Form.Control
            placeholder="Search"
            aria-label=" Search" className="border-light"
            style={{borderTopRightRadius:'50rem'
              ,borderBottomRightRadius:'50rem',borderLeft:0}}
            id="searchBar"
          />
        </InputGroup>
      </Form>
      <Container> 
        <IconBadge icon={<BsCart2 />}></IconBadge>
      </Container>
      </Container>
      <div >
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    </header>
  )
}

export default Header