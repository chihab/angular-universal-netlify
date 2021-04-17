import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataItem } from '@core/models';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseUrlService } from './base-url.service';

interface DataItemDTO {
  id: string;
  title?: string;
  description?: string;
  thumbnailUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private baseUrlService: BaseUrlService,
    private http: HttpClient
  ) {}

  getList(): Observable<DataItem[]> {
    return this.http
      .get<DataItemDTO[]>(
        `${this.baseUrlService.get()}/.netlify/functions/list`
      )
      .pipe(catchError(() => of([])));
  }

  getItem(id: string): Observable<DataItem | null> {
    return this.http
      .get<DataItemDTO>(
        `${this.baseUrlService.get()}/.netlify/functions/item/${id}`
      )
      .pipe(
        map((data: DataItemDTO) => data as DataItemDTO),
        catchError(() => of(null))
      );
  }
}
