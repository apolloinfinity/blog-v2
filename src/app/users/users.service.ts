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

  // Set http options to created headers
  httpOptions = {
    headers: new HttpHeaders().set('Content-type', 'application/json'),
  };

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<UserApiResponse[]> {
    return this.http
      .get<UserApiResponse[]>(this.baseUrl)
      .pipe(tap((users) => console.log(users)));
  }

  getSingleUser(id: number): Observable<UserApiResponse> {
    return this.http
      .get<UserApiResponse>(`${this.baseUrl}/${id}`)
      .pipe(tap((x) => console.log(x)));
  }
}

// Always make sure that HttpClientModule is imported in App Module or Shared Module
// In order to use the http verbs, HttpClient must be used in the Constructor
