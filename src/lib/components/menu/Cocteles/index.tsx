import type { IMenu } from "@lib/api/types";
import type { PropsWithChildren } from "react";
import { CardMenu } from "../CardMenu";
import { render } from "react-dom";
import { NotFound } from "../NotFound";
import { MenuItemsContainer } from "../MenuItemsContainer";

export function Cocteles({menuItems}: PropsWithChildren<{menuItems: IMenu[]}>) {

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
        <h2 className="w-full font-bold text-center my-2">COCTELES</h2>
                <div
                    className=""
                >

                    <MenuItemsContainer>
                        {
                            renderItems({
                                type: "cocteles"
                            })
                        }
                    </MenuItemsContainer>

                    <h2 className="w-full font-bold text-center my-2">FROZZEN</h2>

                    <MenuItemsContainer>

                        {
                            renderItems({
                                type: "frozzens"
                            })
                        }

                    </MenuItemsContainer>

                    <h2 className="w-full font-bold text-center my-2">DE LA CASA</h2>

                    <MenuItemsContainer>
                        {
                            renderItems({
                                type: "casa"
                            })
                        }

                    </MenuItemsContainer>

                    <h2 className="w-full font-bold text-center my-2">CERVEZA</h2>

                    <MenuItemsContainer>
                        {
                            renderItems({
                                type: "cervezas"
                            })
                        }
                    </MenuItemsContainer>

                    <h2 className="w-full font-bold text-center my-2">BOTELLAS</h2>

                    <MenuItemsContainer>
                            {
                                renderItems({
                                    type: "botellas"
                                })
                            }
                    </MenuItemsContainer>

                    <h2 className="w-full font-bold text-center my-2">BEBIDAS</h2>

                    <MenuItemsContainer>

                            {
                                renderItems({
                                    type: "bebidas"
                                })
                            }

                    </MenuItemsContainer>

                </div>
            </>
    )
}