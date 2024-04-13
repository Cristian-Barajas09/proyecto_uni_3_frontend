import React from "react"
interface Props {
    initialValue: number
}

function Counter({initialValue}:React.PropsWithChildren<Props>) {
    const [count, setCount] = React.useState(initialValue)
    return (
        <div>
            Counter: {count}
            <button type="button" title="counter button" onClick={() => setCount(count + 1)}>
                Click
            </button>
        </div>
    )
}

export {
    Counter
}