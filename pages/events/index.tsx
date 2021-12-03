import Card from "../../components/card/Card";
import Search from "../../components/inputs/EventsSearchInput";
import AddEventButton from "../../components/buttons/CreateEventButton";
import EventFilterButton from "../../components/buttons/EventFilterButtton";

const Events = () => (
    <div>
        <AddEventButton /> <EventFilterButton />
        <Search />
        <ul>
            {[...Array(26).fill("events")].map((x, i) => (
                <Card key={i} />
            ))}
        </ul>
    </div>
            )

export default Events;