import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { tap, switchMap, catchError, EMPTY } from 'rxjs';

import { UserApiResponse as User } from '../models/User';
import { UsersService } from '../users.service';

type Status = 'idle' | 'loading' | 'loaded' | 'error';
interface UserState {
  users: User[];
  status: Status;
}

@Injectable()
export class UserStore extends ComponentStore<UserState> {
  constructor(private userService: UsersService) {
    super({
      users: [],
      status: 'idle',
    });
  }
  // selector for users and status
  readonly users$ = this.select((state) => state.users);
  readonly status$ = this.select((state) => state.status);
  // updating states
  private setUsers = this.updater((state, users: User[]) => ({
    ...state,
    users,
  }));

  private setStatus = this.updater((state, status: Status) => ({
    ...state,
    status,
  }));

  // effects to load data from API

  fetchUsers$ = this.effect((origin$) =>
    origin$.pipe(
      tap(() => this.setStatus('loading')),
      switchMap(() =>
        this.userService.getAllUsers().pipe(
          tap((users) => {
            this.setUsers(users);
          })
        )
      ),
      catchError(() => {
        this.setStatus('error');
        return EMPTY;
      })
    )
  );

  // fetchUsers$ = this.effect(() => {
  //   return this.userService.getAllUsers().pipe(
  //     tap(() => {
  //       this.setStatus('loading');
  //     }),
  //     map((users) => {
  //       this.setUsers(users);
  //       this.setStatus('loaded');
  //     })
  //   );
  // });

  // if using an argument in the effect, the () must be used in the component using the effect
  // else for example in users.component.ts: this.userStore.fetchUsers$
}
