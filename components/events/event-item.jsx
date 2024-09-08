import Link from 'next/link'
import Button from '../ui/button'
import styles from "./event-item.module.css"
import DateIcon from '@/icons/date-icon'
import AddressIcon from '@/icons/address-icon'
import ArrowRightIcon from '@/icons/arrow-right-icon'
const EventItem = ({
    tittle,
    image,
    date,
    location,
    id
}) => {
    const humanReadableDate = new Date(date).toLocaleDateString('en-us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'

    })
    const formatedAddress = location.replace(', ', '\n')
    const exploreLink = `/events/${id}`
    return (
        <li className={styles.item}>
            <img src={'/' + image} alt='' />
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{tittle}</h2>
                    <div className={styles.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={styles.address}>
                        <AddressIcon />
                        <address>{formatedAddress}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button link={exploreLink}>
                        <span> Explore Event</span>
                        <span className={styles.icon}> <ArrowRightIcon /></span>
                       </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem