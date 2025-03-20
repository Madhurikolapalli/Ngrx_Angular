import { createSelector } from '@ngrx/store';

export const selector = (state: { counter: number }) => state.counter;
export const doubleSelector = createSelector(selector, (state) => state * 2);
