import { Timeline, TimelineEvent } from 'react-event-timeline'
import events from "./events.json";

interface Props {

}

const index = (props: Props) => {
    console.log(events);

    return (
        <>
            <h1 style={{ paddingTop: 20, paddingBottom: 20 }}>Timeline</h1>
            <Timeline>
                {events.map((event, ind) => (
                    <TimelineEvent
                        title={`${event.name}`}
                        createdAt="2016-09-11 09:06 AM"
                        icon={<i />}
                        iconColor="#03a9f4"
                    >
                        <h5>
                            {event.heading}
                        </h5>
                        <span>
                            {event.date}
                        </span>
                        <p style={{ wordWrap: "break-word" }}>
                            {event.event}
                        </p>
                    </TimelineEvent>
                ))}
            </Timeline>
        </>
    )
}

export default index