import Image from 'next/image'
import Link from 'next/link'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import hero from './hero.jpg'
import styles from './faq.module.css'

export default function Faq () {
  return (
    <>
      <main>
        <Container fluid className={styles.faq}>
          <div className='text-center my-5'>
            <h1>Frequently Asked Questions</h1>
            <h2>We answer visitor concerns</h2>
          </div>

          <div className={styles.heroImageContainer}>
            <Image alt='' src={hero} className={styles.heroImage} layout='fill' />
          </div>

          <div className={styles.faqText}>
            <h3>What is the voltage of the power outlets?</h3>
            <p>The power outlet voltage is 120v @ 60hz, the same as in the United States</p>

            <h3>What are the rules regarding alcohol?</h3>
            <p>Alcohol is not allowed to be served between midnight and 9:00 am. The legal drinking age is 18, but is not strictly enforced.</p>

            <h3>Do I need to learn another language?</h3>
            <p>Many younger Tanitians speak fluent English, but English is uncommon in rural areas, especially by the older residents.</p>

            <h3>What if there is a medical emergency?</h3>
            <p>Taniti has one hospital with many multilingual employees, as well as several clinics throughout the island.</p>

            <h3>Is there a lot of crime on the island?</h3>
            <p>Violent crime is very rare on Taniti, but as tourism increases, there are more reports of pickpocketing and other petty crimes.</p>

            <h3>Will my travel plans be affected by local holidays?</h3>
            <p>Taniti enjoys a large number of national holidays, and many tourist attractions and restaurants will be closed on these days. Visitors should plan accordingly.</p>

            <h3>Do I need to exchange my money to a local currency?</h3>
            <p>Taniti uses the U.S. dollar as its currency, but many businesses will also accept Euros and Yen. Several banks facilitate currency exchange, and many businesses will also accept major credit cards.</p>

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
