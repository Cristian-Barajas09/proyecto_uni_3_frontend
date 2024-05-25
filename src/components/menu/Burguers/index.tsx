import type { IMenu } from "@lib/api/types";
import type { PropsWithChildren } from "react";
import { CardMenu } from "../CardMenu";
import { NotFound } from "../NotFound";
import { MenuItemsContainer } from "../MenuItemsContainer";

export function Burguers({menuItems}: PropsWithChildren<{menuItems: IMenu[]}>) {
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
        <h2 className="w-full font-bold text-center my-2">BURGERS</h2>
                <div
                    className=""
                >

                    <MenuItemsContainer>
                        {
                            renderItems({
                                type: "burgers"
                            })
                        }
                    </MenuItemsContainer>

                    <h2 className="w-full font-bold text-center my-2">EXTRA</h2>
                    <MenuItemsContainer>
                        {
                           renderItems({
                                type: "extra"
                            })
                        }
                    </MenuItemsContainer>
                </div>
            </>
    )
}