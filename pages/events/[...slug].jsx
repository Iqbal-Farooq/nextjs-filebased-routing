import EventList from '@/components/events/event-list'
import { getFilteredEvents } from '@/dummy-data'
import { useRouter } from 'next/router'
const FilteredEventsPage = () => {
  const router=useRouter()
  const filteredData=router.query.slug
  if(!filteredData){
    return <p className='center'> Loading... </p>
  }
  const filteredYear=filteredData[0]
  const filteredMonth=filteredData[1]
  // convert the string month and year to numbers 
  const numYear=+filteredYear
  const numMonth=+filteredMonth
  if(isNaN(numMonth) || isNaN(numYear) || numYear>2030 || numYear<2021 || numMonth<1 || numMonth>12){
    return <p>Invlaid data</p>
  }
  const filteredEvents=getFilteredEvents({
    year:numYear,
    month:numMonth
  })
  if(!filteredEvents || filteredEvents.length===0){
    return <p>No Events Found </p>
  }
  return (
    <>
      <EventList items={filteredEvents} />
    </>
  )
}

export default FilteredEventsPage