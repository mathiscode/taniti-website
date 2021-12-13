import Image from 'next/image'
import Link from 'next/link'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import styles from './about.module.css'

export default function About () {
  return (
    <>
      <main>
        <Container fluid className={styles.about}>
          <div className='text-center my-5'>
            <h1>About Taniti</h1>
            <h2>Your new favorite destination</h2>
          </div>

          <video autoPlay muted loop className={styles.video}>
            <source src='/resort.mp4' />
          </video>

          <div className={styles.aboutText}>
            <p>Taniti is a small, tropical island in the Pacific. While the island has an area of less than 500 square miles, the terrain is varied and includes both sandy and rocky beaches, a small but safe harbor, lush tropical rainforests, and a mountainous interior that includes a small, active volcano. Taniti has an indigenous population of about 20,000. Until a recent increase in tourism, most the Tanitian economy was dominated by fishing or agriculture.</p>
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
