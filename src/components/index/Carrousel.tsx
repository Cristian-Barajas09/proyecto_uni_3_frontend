import React from 'react'
import type { IEvent } from '@lib/api/types'
import { $createItem } from '@store/admin'
import { useStore } from '@nanostores/react'
import { CarrouselContent, CarrouselLinks } from './CarrouselContent'

function Carrousel() {
    const [events, setEvents] = React.useState<IEvent[]>([])
    const [error,setError] = React.useState<boolean>(false)
    const createItem = useStore($createItem)

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/events')

            if(!response.ok){
                setError(true)

                return
            }
            const data = await response.json() as IEvent[]
            setEvents(data)
        }

        fetchData()

        return () => {
            console.log("Cleanup")
            setEvents([])
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
            <div className="carousel w-auto h-auto">
        {
            latestEvents.map(({title,id,image,date,description}) => (
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

            </div>
            <div className="flex justify-center w-full py-2 gap-2">

                {
                    latestEvents.map(({id}) => (
                        <CarrouselLinks key={id} id={id}/>
                    ))
                }
            </div>
    
    </div>
    )
}


export default Carrousel