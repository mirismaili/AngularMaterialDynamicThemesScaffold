// core
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// rxjs
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// configs
import { API, APP } from '../config';

@Injectable()
export class SampleService {

  constructor(private http: HttpClient) { }

  /**
   * Gets data from API
   * @params latestJob: HttpParams
   * @returns: Observable - array of any
   */
  getData(): Observable<any> {
    console.log('API.endpoints.sample(): ', API.endpoints.sample());
    // request
    return this.http.get(API.endpoints.sample(), { headers: API.headers.get() }).pipe(
      map((data: any) => data),
      catchError(error => throwError(error || APP.errors.msg_generic))
    );
  }
}
