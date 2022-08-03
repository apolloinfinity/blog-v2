import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { UserApiResponse } from '../models/User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  user?: UserApiResponse;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.getUser(id);
    });
  }

  getUser(id: number) {
    this.usersService
      .getSingleUser(id)
      .subscribe((user) => this.userRetrieved(user));
  }

  userRetrieved(user: UserApiResponse): void {
    console.log(user);
    this.user = { ...user };
  }
}
