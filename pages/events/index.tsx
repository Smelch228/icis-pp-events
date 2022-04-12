import Card from "../../components/card/Card";
import Search from "../../components/inputs/EventsSearchInput";
import AddEventButton from "../../components/buttons/CreateEventButton";
import EventFilterButton from "../../components/buttons/EventFilterButtton";
import { css } from "@emotion/css";
import Typography from '@mui/material/Typography'
import SearchOffIcon from '@mui/icons-material/SearchOff';

interface IEvent
{
  id: string;
  eventName: string,
  content: string,
  eventFormat: boolean,
  startTime: string,
  endTime: string,
  location: string,
  published: string,
  orginezer: number,
  category: Array<number>
}

interface IEventsProps {
  data?: IEvent[]
}


const parentStyles = css`
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgb(255, 255, 255);
      flex-direction: column;
      min-width: 411px;
      width: 411px;`

const Events = ({ data } : IEventsProps) => {

  console.log({data});
  

  const events = data ?? [...Array(26).fill('events')];

  return (
  <div className={parentStyles}>
    <div
      className={css`
        display: flex;
      `}
    >
      <Search />
      <div
        className={css`
          margin: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        `}
      >
        <AddEventButton /> 
        <EventFilterButton />
      </div>
    </div>
          {true && ( <ul
            className={css`
              padding-inline-start: 0;
            `}
          >
            {events.map((event: object, i: number) => (
              <Card event={event} key={i}/>
            ))}
          </ul>)}
  </div>
  )
}

export default Events;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:8000/api/events`)
  const data = await res.json()
  // Pass data to the page via props
  return { props: { data } }
}
