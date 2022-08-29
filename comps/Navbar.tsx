import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

const NavbarComp = (props: any) => {
    const { user, logout } = useAuth()
    const router = useRouter()

    return ( 
        <Navbar bg="light" expand="lg">
      <Container>
        {user ? (
          <Link href="/dashboard" passHref>
          <Navbar.Brand>Senang Order</Navbar.Brand>
        </Link>
        ) : (
        <Link href="/" passHref>
          <Navbar.Brand>Senang Order</Navbar.Brand>
        </Link>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? (
              <>
                <Link href="/aboutus" passHref>
                  <Nav.Link>About Us</Nav.Link>
                </Link>
                <Link href="/ordernow" passHref>
                  <Nav.Link>Order Now</Nav.Link>
                </Link>
                <Nav.Link
                  onClick={() => {
                    logout()
                    router.push('/login')
                  }}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Link href="/aboutus" passHref>
                  <Nav.Link>About Us</Nav.Link>
                </Link>
                <Link href="/signup" passHref>
                  <Nav.Link>Signup</Nav.Link>
                </Link>
                <Link href="/login" passHref>
                  <Nav.Link>Login</Nav.Link>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     );
}
 
export default NavbarComp;