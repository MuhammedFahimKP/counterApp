import { type PayloadAction, createSlice } from "@reduxjs/toolkit"

import { v4 as uuid4 } from 'uuid';

type State = {
    [key: string]: number;
}

const initialState: State = {}


type Payload = {
    key: string;
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        initItem(state: State) {
            const key = uuid4();
            state[key] = 0;


        },

        increamentItem(state: State, actions: PayloadAction<Payload>) {
            if (state.hasOwnProperty(actions.payload.key)) {
                state[actions.payload.key] += 1
            }
        },

        decrementItem(state: State, actions: PayloadAction<Payload>) {
            if (state.hasOwnProperty(actions.payload.key) && state[actions.payload.key] > 0) {
                state[actions.payload.key] -= 1
            }


        },

        resetItem(state: State, actions: PayloadAction<Payload>) {
            if (state.hasOwnProperty(actions.payload.key)) {
                state[actions.payload.key] = 0


            }

        },

        resetAll(state: State) {
            if (Object.keys(state).length > 0) {


                Object.keys(state).forEach((key: string) => {
                    state[key] = 0;
                })
            }

        },

        destroyItem(state: State, actions: PayloadAction<Payload>) {
            if (state.hasOwnProperty(actions.payload.key)) {
                delete state[actions.payload.key]
            }
        }
    },
})

export default counterSlice.reducer
export const { initItem, increamentItem, decrementItem, destroyItem, resetItem, resetAll } = counterSlice.actions






