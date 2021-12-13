import Image from 'next/image'
import Link from 'next/link'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import styles from './index.module.css'

export default function Home () {
  return (
    <>
      <main>
        <Container fluid className={styles.hero}>
          <Image alt='' src='/beach1.jpg' width='400px' height='300px' />

          <div className={styles.heroText}>
            <h1>Welcome to Taniti</h1>
            <h2>Your new favorite destination</h2>

            <div className={styles.heroButtons}>
              <Link href='/book' passHref>
                <Button>Book your Trip</Button>
              </Link>

              <Link href='/about' passHref>
                <Button>About the Island</Button>
              </Link>
            </div>
          </div>
        </Container>

        <Container fluid className={styles.about}>
          <Image alt='' src='/beach2.jpg' width='400px' height='200px' />

          <div className={styles.aboutText}>
            <h1>About the Island</h1>
            <h2>Sun and fun for the whole family</h2>

            <p>
              Taniti is a small, tropical island in the Pacific. While the island has an area of less than 500 square miles, 
              the terrain is varied and includes both sandy and rocky beaches, a small but safe harbor, lush tropical rainforests, 
              and a mountainous interior that includes a small, active volcano. Taniti has...
            </p>

            <Link href='/about' passHref>
              <a className={styles.aboutLearnMore}>Learn more &rarr;</a>
            </Link>
          </div>
        </Container>

        <hr />

        <Container fluid className={styles.explore}>
          <div className={styles.exploreHeading}>
            <h1>Explore all we have to offer</h1>
            <h2>Taniti has everything to make your experience one you will never forget</h2>
          </div>

          <div className={styles.exploreButtons}>
            <Link href='/faq' passHref><Button>Frequently Asked Questions</Button></Link>
            <Link href='/accommodations' passHref><Button>Accommodations</Button></Link>
            <Link href='/attractions' passHref><Button>Attractions</Button></Link>
          </div>
        </Container>
      </main>
    </>
  )
}
