import { Component } from '@angular/core';
import { DataItem } from '@core/models';
import { DataService } from '@core/services/data-api.service';
import { ServerStateService } from '@core/services/server-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  list$: Observable<DataItem[]>;

  constructor(
    private dataService: DataService,
    private serverStateService: ServerStateService
  ) {
    this.list$ = this.dataService
      .getList()
      .pipe(this.serverStateService.hydrate('list'));
  }
}
