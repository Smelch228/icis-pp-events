import Card from "../../components/card/Card";
import Search from "../../components/inputs/EventsSearchInput";
import AddEventButton from "../../components/buttons/CreateEventButton";
import EventFilterButton from "../../components/buttons/EventFilterButtton";
import BackButton from "../../components/buttons/BackButton";
import CancelButton from "../../components/buttons/CancelButton";
import SubscribeCounterButton from "../../components/buttons/SubscribeCounterButton";


const Events = () => (
    <div>
        <AddEventButton /> <EventFilterButton /> <BackButton/>
        <Search /> <CancelButton /> <SubscribeCounterButton/>
        <ul>
            {[...Array(26).fill("events")].map((x, i) => (
                <Card key={i} />
            ))}
        </ul>
    </div>
            )

export default Events;