import { createReducer, on } from '@ngrx/store';
import { decrement, increment, set } from './counter.action';

const initialState: number = 1;
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, incNum) => state + incNum.value),
  on(decrement, (state, decNum) => (state = state - decNum.value)),
  on(set, (state, action) => action.value)
);
