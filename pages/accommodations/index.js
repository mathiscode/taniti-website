import Image from 'next/image'
import Link from 'next/link'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import hero from './hero.jpg'
import styles from './accommodations.module.css'

export default function Accommodations () {
  return (
    <>
      <main>
        <Container fluid className={styles.accommodations}>
          <div className='text-center my-5'>
            <h1>Accommodations</h1>
            <h2>Enjoy your stay in true luxury</h2>
          </div>

          <div className={styles.heroImageContainer}>
            <Image alt='' src={hero} className={styles.heroImage} layout='fill' />
          </div>

          <div className={styles.accommodationsText}>
            <h3>Restaurants</h3>
            <p>Taniti currently has 11 restaurants: five serve mostly local fish and rice, three serve American-style meals, and two serve Pan-Asian cuisine.</p>

            <h3>Grocery Stores</h3>
            <p>Taniti has two supermarkets, two smaller grocery stores, and one convenience store that is open 24 hours a day.</p>

            <h3>Lodging</h3>
            <p>Taniti has a wide variety of lodging that ranges from an inexpensive hostel to one large, four-star resort. There are many small, family-owned hotels and a growing number of bed and breakfasts. All types of lodging are strictly regulated and regularly inspected by the Tanitian government.</p>

            <h3>Transportation to and from the island</h3>
            <p>Almost all visitors arrive to Taniti by air, though some arrive on a small cruise ship that docks in Yellow Leaf Bay for one night per week. Taniti is served by a small airport that can accommodate small jets and propeller planes. Taniti is in the process of expanding the airport so larger jets will be able to land on the island within the next few years. </p>

            <h3>Transportation around the island</h3>
            <p>Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every day. Private buses serve the rest of the island. Taxis are available in Taniti City, and rental cars can be rented from a local rental agency near the airport. Bikes and helmets are available to rent from several vendors (helmets are required by law). Taniti City is fairly flat and very walkable. Many tourists stay in the area surrounding Merriton Landing: this area is easy to explore on foot.</p>
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
