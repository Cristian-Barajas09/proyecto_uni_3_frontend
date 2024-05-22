import { useStore } from "@nanostores/react";
import { $theme } from "@store/global";
import React from "react";

function ConfigContent() {
    const theme = useStore($theme);

    const handleTheme = (
        e:React.MouseEvent<HTMLInputElement, MouseEvent>
    ) => {
        if (theme === "light") {
            $theme.set("dark");
        } else {
            $theme.set("light");
        }
    }
    return (
        <div className="m-2">
            <div className="flex gap-2">
                <label htmlFor="">
                    Modo oscuro
                </label>
                <input
                    title="Modo oscuro"
                    type="checkbox"
                    value={theme}
                    className="toggle theme-controller"
                    onClick={handleTheme}
                />
            </div>
        </div>
    );
}

export { ConfigContent };