import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Redux uses a library called Immer that tracks all the mutations making them safe and immutable without copying, spreading, or mapping. Less code.
    incremented(state) {
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    // decrement(state) {
    //   state.value--;
    // },
  },
});

export const { incremented, amountAdded } = counterSlice.actions;

export default counterSlice.reducer;
