import { catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class BackendService {
  constructor(private http: HttpClient) {}

  buildApiUrl(route: string) {
    return environment.apiUrl + route;
  }

  get(route: string, queryParams = {}): Observable<any> {
    return this.http
      .get(this.buildApiUrl(route), {
        withCredentials: true,
        responseType: "json",
        params: queryParams,
      })
      .pipe(catchError(this.errorHandler));
  }

  post(route: string, body: any, queryParams = {}): Observable<any> {
    return this.http
      .post(this.buildApiUrl(route), body, {
        withCredentials: true,
        responseType: "json",
        params: queryParams,
      })
      .pipe(catchError(this.errorHandler));
  }

  put(route: string, body: any, queryParams = {}): Observable<any> {
    return this.http
      .put(this.buildApiUrl(route), body, {
        withCredentials: true,
        responseType: "json",
        params: queryParams,
      })
      .pipe(catchError(this.errorHandler));
  }

  delete(route: string): Observable<any> {
    return this.http
      .delete(this.buildApiUrl(route), {
        withCredentials: true,
        responseType: "json",
      })
      .pipe(catchError(this.errorHandler));
  }

  errorHandler = (err: any) => {
    return throwError(() => new Error("an error occured"));
  };
}
