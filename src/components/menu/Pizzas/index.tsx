import type { IMenu } from "@lib/api/types";
import type { PropsWithChildren } from "react";
import { CardMenu } from "@components/menu/CardMenu";
import { MenuItemsContainer } from "../MenuItemsContainer";
export function Pizzas({menuItems}: PropsWithChildren<{menuItems: IMenu[]}>) {
    console.log(menuItems)
    return (
        <>
            <div className="">
                <h2 className="w-full font-bold text-center my-2">PIZZAS</h2>
                <MenuItemsContainer>
                    {
                        menuItems.filter(
                            (item) => item.categories.some(category => category.toLowerCase() === "pizzas")
                        ).map((item) => (
                            <CardMenu
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                ingredients={item.ingredients}
                            />
                        ))
                    }
                </MenuItemsContainer>
            </div>
        </>
    )
}