import { Component, OnInit } from '@angular/core';

import { UserApiResponse } from './models/User';
import { UserStore } from './store/users.store';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserStore],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'company', 'profile'];

  users$ = this.userStore.users$;

  constructor(private userStore: UserStore) {}

  ngOnInit(): void {
    this.userStore.fetchUsers$();
  }
}
