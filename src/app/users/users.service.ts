import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UserApiResponse } from './models/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/users';

  // Set header Content-type
  headers = new HttpHeaders().set('Content-type', 'application/json');
  // Set http options to created headers
  httpOptions = {
    headers: this.headers,
  };

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserApiResponse[]> {
    return this.http
      .get<UserApiResponse[]>(this.baseUrl)
      .pipe(tap((users) => console.log(users)));
  }
}

// Always make sure that HttpClientModule is imported in App Module or Shared Module
// In order to use the http verbs, HttpClient must be used in the Constructor
