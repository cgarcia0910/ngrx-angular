import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { GetConfig } from './store/actions/config.actions';
import { selectConfig } from './store/selectors/config.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-angular';
  configBS = this.store.pipe(select(selectConfig));
  constructor( private store: Store<IAppState>) {}
  ngOnInit(): void {
    this.store.dispatch( new GetConfig() );
    this.configBS.subscribe(console.log)
  }

}
