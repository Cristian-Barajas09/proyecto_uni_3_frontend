import { createSlice } from "@reduxjs/toolkit";
import { Plate } from "@/modules/api/interfaces/plates.interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";
import PlatesService from "@/modules/api/services/plates.service";


interface PlatesState {
    plates: Plate[],
    limit?: number,
    currentPage: number,
    numberOfPage: number,
    error: string | null
}

const initialState: PlatesState = {
    plates: [],
    currentPage: 1,
    numberOfPage: 0,
    limit: 10,
    error: null
}


interface GetPlatesPayload {
    currentPage: number;
}

export const getPlatesAsync = createAsyncThunk(
    'plates/getPlates',
    async (payload: GetPlatesPayload, {dispatch}) => {
        try {
            const response = await PlatesService.getAll(payload.currentPage);
            dispatch(setPlates(response.results))
            dispatch(setNumberOfPage(response.last_page))
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
        setCurrentPage: (state,action) => {
            state.currentPage = action.payload.currentPage

        },

        setNumberOfPage: (state, action) => {
            state.numberOfPage = action.payload
        },

        setError: (state, action) => {
            state.error = action.payload
        }
    },
})

export const { setPlates, setError, setNumberOfPage,setCurrentPage } = platesSlice.actions

export default platesSlice.reducer