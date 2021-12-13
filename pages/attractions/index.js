import Image from 'next/image'
import Link from 'next/link'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import hero from './hero.jpg'
import styles from './attractions.module.css'

export default function Attractions () {
  return (
    <>
      <main>
        <Container fluid className={styles.attractions}>
          <div className='text-center my-5'>
            <h1>Attractions</h1>
            <h2>There is so much to see and do in Taniti!</h2>
          </div>

          <div className={styles.heroImageContainer}>
            <Image alt='' src={hero} className={styles.heroImage} layout='fill' />
          </div>

          <div className={styles.attractionsText}>
            <h3>Entertainment</h3>
            <p>Most people visit Taniti to enjoy the beaches, explore the rainforest, and to visit the volcano. However, there are other things to do, including visiting a local history museum, going on chartered fishing tours, snorkeling, zip-lining in the rainforest, visiting several pubs, including a microbrewery, dancing at a new dance club, seeing a movie, taking helicopter rides, playing at an arcade, visiting art galleries, and bowling. Also, a nine-hole golf course should be operational by next year. Many of these activities are located in Merriton Landing, which is a rapidly developing area on the north side of Yellow Leaf Bay.</p>

            <h3>Sightseeing</h3>
            <p>Most tourists spend most of their time in Taniti City, which boasts native architecture and nearby white, sandy beaches that encircle Yellow Leaf Bay. Other popular activities include boat or bus tours of the island, hikes in the rainforest, or visits to Taniti’s active volcano.</p>
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
