import React, { type PropsWithChildren } from 'react'
import { apiConnection } from '@lib/api/api'
import type { IEvent } from '@lib/api/types'
import { useCookies } from 'react-cookie'
import { navigate } from 'astro:transitions/client'
import { $createItem } from '@store/admin'
import { useStore } from '@nanostores/react'
import { CarrouselContent, CarrouselLinks } from './CarrouselContent'

function Carrousel() {
    const [ token ] = useCookies(["token"])
    const [events, setEvents] = React.useState<IEvent[]>([])
    const createItem = useStore($createItem)

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/events', {
                headers: {
                    'Authorization': `Bearer ${token.token}`
                },
            })

            const data = await response.json() as IEvent[]
            setEvents(data)
        }

        fetchData()

        return () => {
            console.log("Cleanup")
            setEvents([])
        }
    },[createItem])
    const sortedEvents = events.sort((a, b) => a.id - b.id);

    // Get the latest 4 events
    const latestEvents = sortedEvents.slice(0, 2);

    return (
        <div>
            <div className="carousel w-full h-96">

        {
            latestEvents.map(({title,id,image,date,description}) => (
                    <CarrouselContent
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
        <CarrouselLinks
                        id={id}
                        />
                    ))
                }
                </div>
    
    </div>
    )
}


export default Carrousel