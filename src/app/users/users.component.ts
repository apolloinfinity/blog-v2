import { Component, OnInit } from '@angular/core';

import { UserApiResponse } from './models/User';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: UserApiResponse[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'company', 'profile'];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((users) => (this.users = users));
  }
}
