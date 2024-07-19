import React from 'react'
import type { IEvent } from '@lib/api/types'
import { $createItem } from '@store/admin'
import { useStore } from '@nanostores/react'
import { CarrouselContent } from './CarrouselContent'
import { CarrouselLinks } from './CarrouselLinks'
import { RtFor } from '@components/utils/RtFor'
import { $events } from '@store/global'

function Carrousel() {
    const events = useStore($events);
    const [error,setError] = React.useState<boolean>(false)
    const createItem = useStore($createItem);

    React.useEffect(() => {
        const fetchData = async () => {
            if(events.length > 0) return

            const response = await fetch('/api/events')

            if(!response.ok){
                setError(true)

                return
            }
            const data = await response.json() as IEvent[]
            $events.set(data)
        }

        fetchData()

        return () => {
            console.log("Cleanup")
        }
    },[createItem])

    if(error) {
        return (
            <section className='p-2 mt-20'>
                <div className='w-full h-80'>
                    <img
                        src="/404.jpeg"
                        alt="404"
                        className='w-full h-full '
                    />
                </div>
            </section>
        )
    }


    const sortedEvents = events.sort((a, b) => a.id - b.id);

    // Get the latest 4 events
    const latestEvents = sortedEvents.slice(0, 2);

    return (
        <div>
            <div className="carousel w-full h-96">
                <RtFor iterable={latestEvents}>
                    {
                        (({title,id,image,date,description}) => (
                            <CarrouselContent
                                key={id}
                                title={title}
                                id={id}
                                image={image}
                                description={description}
                                date={date}
                            />
                        ))
                    }
                </RtFor>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">

                <RtFor iterable={latestEvents}>
                    {
                        ({id}) => (
                            <CarrouselLinks id={id} key={id} />
                        )
                    }
                </RtFor>
            </div>
    
    </div>
    )
}


export default Carrousel