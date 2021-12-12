import Card from "../../components/card/Card";
import Search from "../../components/inputs/EventsSearchInput";
import AddEventButton from "../../components/buttons/CreateEventButton";
import EventFilterButton from "../../components/buttons/EventFilterButtton";
import { css } from "@emotion/css";

const parentStyles = css`
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgb(218, 210, 205);
      flex-direction: column;
      min-width: 411px;
      width: 411px;`

const Events = () => (
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
        <AddEventButton /> <EventFilterButton />
      </div>
    </div>
    
      <ul
        className={css`
          padding-inline-start: 0;
        `}
      >
        {[...Array(26).fill('events')].map((card, i) => (
          <Card key={i} />
        ))}
      </ul>
  </div>
)

export default Events;
