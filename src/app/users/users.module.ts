import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [UsersComponent, AddUserComponent, UserDetailComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule, UsersRoutingModule],
})
export class UsersModule {}
