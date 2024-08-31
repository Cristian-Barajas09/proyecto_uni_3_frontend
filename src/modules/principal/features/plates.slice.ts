import { createSlice } from "@reduxjs/toolkit";
import { Plate } from "@/modules/api/interfaces/plates.interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";
import PlatesService from "@/modules/api/services/plates.service";


interface PlatesState {
    plates: Plate[]
    error: string | null
}

const initialState: PlatesState = {
    plates: [],
    error: null
}


export const getPlatesAsync = createAsyncThunk(
    'plates/getPlates',
    async (_, {dispatch}) => {
        try {
            const response = await PlatesService.getAll();
            dispatch(setPlates(response))
        } catch (error) {
            console.log(error);
            dispatch(setError('Error fetching plates'))
        }
    }
)


const platesSlice = createSlice({
    name: 'plates',
    initialState,
    reducers: {
        setPlates: (state, action) => {
            state.plates = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    },
})

export const { setPlates, setError } = platesSlice.actions

export default platesSlice.reducer