/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { WeatherForecast } from '../models/weather-forecast';
// @Injectable({
//   providedIn: 'root',
// })
class SampleDataService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  WeatherForecastsResponse(): Observable<StrictHttpResponse<Array<WeatherForecast>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/SampleData/WeatherForecasts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as StrictHttpResponse<Array<WeatherForecast>>;
      })
    );
  }
  /**
   * @return Success
   */
  WeatherForecasts(): Observable<Array<WeatherForecast>> {
    return this.WeatherForecastsResponse().pipe(
      __map(_r => _r.body as Array<WeatherForecast>)
    );
  }
}

module SampleDataService {
}

export { SampleDataService }
