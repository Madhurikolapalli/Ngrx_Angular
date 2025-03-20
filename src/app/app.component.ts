import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { init } from './Store/counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.store.dispatch(init());
  }
  constructor(private store: Store) {}
}
