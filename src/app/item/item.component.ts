import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataItem } from '@core/models';
import { DataService } from '@core/services/data-api.service';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ItemComponent implements OnInit {
  item$: Observable<DataItem | null> = EMPTY;
  errorLoadingYoutubeVideo = false;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.item$ = this.dataService.getItem(id);
    }
  }
}
