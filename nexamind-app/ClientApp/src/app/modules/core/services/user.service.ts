/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserDetail } from '../models/user-detail';
// @Injectable({
//   providedIn: 'root',
// })
class UserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }
  GetResponse(): Observable<StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/User/All`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as StrictHttpResponse<null>;
      })
    );
  }  Get(): Observable<null> {
    return this.GetResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param name undefined
   */
  Get_1Response(name?: string): Observable<StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (name != null) __params = __params.set('name', name.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/User/Get`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param name undefined
   */
  Get_1(name?: string): Observable<null> {
    return this.Get_1Response(name).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param user undefined
   */
  CreateUserResponse(user?: UserDetail): Observable<StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/User/Create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param user undefined
   */
  CreateUser(user?: UserDetail): Observable<null> {
    return this.CreateUserResponse(user).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `UserService.UpdateParams` containing the following parameters:
   *
   * - `user`:
   *
   * - `name`:
   */
  UpdateResponse(params: UserService.UpdateParams): Observable<StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.user;
    if (params.name != null) __params = __params.set('name', params.name.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/User/Update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `UserService.UpdateParams` containing the following parameters:
   *
   * - `user`:
   *
   * - `name`:
   */
  Update(params: UserService.UpdateParams): Observable<null> {
    return this.UpdateResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param name undefined
   */
  DeleteResponse(name?: string): Observable<StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (name != null) __params = __params.set('name', name.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/User/Delete`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param name undefined
   */
  Delete(name?: string): Observable<null> {
    return this.DeleteResponse(name).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UserService {

  /**
   * Parameters for Update
   */
  export interface UpdateParams {
    user?: UserDetail;
    name?: string;
  }
}

export { UserService }
