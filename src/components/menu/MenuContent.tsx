import { CardMenu } from '@components/menu/CardMenu.tsx'
import { Entradas } from './Entradas'
import { Burguers } from './Burguers'
import { Pizzas } from './Pizzas'
import { Cocteles } from './Cocteles'
import React from 'react'
import type { IMenu } from '@lib/api/types'

function MenuContent() {
    const [menuItems,setMenuItems] = React.useState<IMenu[]>([])

    React.useEffect(() => {
        const fetchMenu = async () => {
            const response = await fetch('/api/plates')
            const data = await response.json() as {data: IMenu[]}
            setMenuItems(data.data)
        }

        fetchMenu()

        return () => {
            setMenuItems([])
        }
    },[])

    return (
        <>
            <section className='mb-5'>
                <Entradas menuItems={menuItems} />
            </section>

            <section className='mb-5'>
                <Burguers menuItems={menuItems} />
            </section>

            <section className='mb-5'>
                <Pizzas menuItems={menuItems} />
            </section>

            <section className='mb-5'>
                <Cocteles menuItems={menuItems} />
            </section>
        </>
    )
}


export {
    MenuContent
}