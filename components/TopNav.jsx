import Link from 'next/link'
import Image from 'next/image'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import styles from './TopNav.module.css'

export default function TopNav () {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Image src='/favicon.ico' alt='' width='32px' height='32px' />
        <Link href='/' passHref>
          <Navbar.Brand>
            <span className='ms-3'>Visit Taniti</span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='topnav' />
        <Navbar.Collapse id='topnav'>
          <Nav className='ms-auto'>
            <Link href='/about' passHref><Nav.Link>About</Nav.Link></Link>
            <Link href='/accommodations' passHref><Nav.Link>Accommodations</Nav.Link></Link>
            <Link href='/attractions' passHref><Nav.Link>Attractions</Nav.Link></Link>
            <Link href='/faq' passHref><Nav.Link>FAQ</Nav.Link></Link>

            <Link href='/book' passHref>
              <Button variant='primary' className='ms-3'>Book Your Trip</Button>
            </Link>

            <a title='Visit us on Facebook' target='_blank' rel='noopener noreferrer' href='https://facebook.com' style={{ marginLeft: '1rem', marginTop: '5px' }}>
              <Image
                alt='Facebook'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/600px-Facebook_logo_%28square%29.png'
                width='32px'
                height='32px'
                className={styles.facebookButton}
              />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
