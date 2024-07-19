import { CardMenu } from '@components/menu/CardMenu.tsx'
import type { IMenu } from '@lib/api/types'
import type { PropsWithChildren } from 'react'
import { NotFound } from '../NotFound'
import { MenuItemsContainer } from '../MenuItemsContainer'


export function Entradas ({menuItems} : PropsWithChildren<{menuItems: IMenu[]}>) {
    const renderItems = ({type}: {type: string}) => {
        
        const filterItems = menuItems.filter(
            (item) => item.categories.some(category => category.toLowerCase() === type.toLowerCase())
        )

        if (filterItems.length === 0 || !menuItems){
            return (
                <NotFound title={type} />
            )
        }

        return filterItems.map((item) => (
            <CardMenu
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                ingredients={item.ingredients}
            />
        ))
    }
    
    
    return (
    <>
        <h2 className="w-full font-bold text-center my-2">ENTRADAS</h2>
            <div
                className=""
            >
                    <h2 className="w-full font-bold text-center ">PAPAS</h2>
                    <MenuItemsContainer>
                        {
                            renderItems({
                                type: "papas"
                            })
                        }
                    </MenuItemsContainer>


                    <h2 className="w-full font-bold text-center">TAPAS</h2>

                    <MenuItemsContainer>

                        {
                            renderItems({
                                type: "tapas"
                            })
                        }

                    </MenuItemsContainer>


                    <h2 className="w-full font-bold text-center ">FUERTES</h2>

                    <MenuItemsContainer>

                        {
                            renderItems({
                                type: "fuertes"
                            })
                        }

                    </MenuItemsContainer>


                </div>
            </>
    )
}