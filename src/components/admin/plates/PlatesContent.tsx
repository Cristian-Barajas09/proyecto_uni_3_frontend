import { AllContent } from "../content/AllContent";

const data = [
    {
        id: 1,
        title: "Plate 1",
        image: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        title: "Plate 2",
        image: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        title: "Plate 3",
        image: "https://via.placeholder.com/150"
    }
]

function PlatesContent() {
    return (
        <div>
            <div>
                <h1>Plates</h1>
            </div>
            <AllContent data={data} page="plates"/>
        </div>
    )
}

export {
    PlatesContent
}