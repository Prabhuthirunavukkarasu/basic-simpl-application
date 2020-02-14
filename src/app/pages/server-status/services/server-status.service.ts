import { Injectable } from '@angular/core';
import { catchError } from "rxjs/operators";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class ServerStatusService {

  userAuth: string;
  user: string;
  constructor(private http: HttpClient) { }

  getServerList() {
    return this.http.get("https://localhost:44351/api/status", { headers: this.getCommonHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  getCommonHeaders() {
    let headers = new HttpHeaders();
    headers.append("content-type", "application/json");
    headers.append("Access-Control-Allow-Origin", '*');
    return headers;
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}