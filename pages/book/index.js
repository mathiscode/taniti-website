import Image from 'next/image'
import Link from 'next/link'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import styles from './book.module.css'

export default function Book () {
  return (
    <>
      <main>
        <Container fluid className={styles.book}>
          <div className='text-center my-5'>
            <h1>Book Your Trip</h1>
            <h2>Start your adventure today</h2>
          </div>

          <div className={styles.bookText}>
            <p>To get started, just head over to Expedia to find available transportation and lodging options!</p>

            <Button variant='success' size='lg' href='https://expedia.com' target='_blank' className={styles.bookButton}>Book on Expedia</Button>
          </div>

          <div className={styles.exploreButtons}>
            <Link href='/accommodations' passHref><Button>Accommodations</Button></Link>
            <Link href='/attractions' passHref><Button>Attractions</Button></Link>
            <Link href='/book' passHref><Button>Book Your Trip</Button></Link>
          </div>
        </Container>
      </main>
    </>
  )
}
