import { MoonIcon } from "@components/icons/MoonIcon"
import { SunIcon } from "@components/icons/SunIcon"
import { useStore } from "@nanostores/react"
import { $theme } from "@store/global"
import React from "react"

function ThemeButton() {
    const theme = useStore($theme)
    console.log(theme)
    const handleClick = () => {
        $theme.set(theme === "light" ? "dark" : "light")
    }


    return (
        <button type="button" onClick={handleClick} className="btn btn-ghost w-full lg:w-auto">
            {theme === "light" ? (
                <SunIcon className="w-6 h-6" />
            ) : <MoonIcon className="w-6 h-6" />}
        </button>
    )
}

export {
    ThemeButton
}