import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment, init, set } from './counter.action';
import { count, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()
export class CounterEffects {
  loadCount = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      switchMap(() => {
        const storedValue = localStorage.getItem('storeValue');
        if (storedValue) {
          return of(set({ value: +storedValue }));
        }
        return of(set({ value: 0 }));
      })
    )
  );
  savecount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        withLatestFrom(this.store.select('counter')),
        tap(([action, storedata]) => {
          console.log(action);
          localStorage.setItem('counter', action.value.toString());
          localStorage.setItem('storeValue', storedata.toString());
        })
        // ofType(increment),
        // tap((action: any) => {
        //   console.log(action);
        //   localStorage.setItem('counter', action.value.toString());
        // })
      ),
    { dispatch: false }
  );
  constructor(
    private actions$: Actions,
    private store: Store<{ counter: number }>
  ) {}
}
