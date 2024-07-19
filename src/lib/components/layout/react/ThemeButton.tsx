import { MoonIcon } from "@components/icons/MoonIcon"
import { SunIcon } from "@components/icons/SunIcon"
import { useStore } from "@nanostores/react"
import { $theme } from "@store/global"
import { RtIf } from "@components/utils/RtIf"

function ThemeButton() {
    const theme = useStore($theme)
    console.log(theme)
    const handleClick = () => {
        $theme.set(theme === "light" ? "dark" : "light")
    }


    return (
        <button type="button" onClick={handleClick} title="Theme button" className="btn btn-ghost w-full lg:w-auto">
            <RtIf condition={theme === "light"} elseComponent={<MoonIcon className="w-6 h-6" />}>
                <SunIcon className="w-6 h-6" />
            </RtIf>
        </button>
    )
}

export {
    ThemeButton
}