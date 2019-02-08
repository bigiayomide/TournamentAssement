import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../../call-recording-search/callrecording.services/users.service';
import { AppUser } from '../../../shared/interfaces';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AppUserComponent } from './app-user/app-user.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
// import { MatTableDataSource, MatSort } from '@angular/material';
//     import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  appUsers: AppUser[];
  displayedColumns: string[] = ['username', 'email', 'isAdmin', 'Actions' ];
  dataSource: any;

  constructor(private userService: UserManagementService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
    .subscribe((result: any) => {
      this.appUsers = result;
      this.dataSource = this.appUsers;
    },
    error => {
        console.log(error);
    });
  }

  openDialog(action: string, user?: AppUser) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    // dialogConfig.height = '55%';
    dialogConfig.width = '25%';
    dialogConfig.data = {
      user: user,
      action: action
    };
    console.log(action);
    const dialogRef = this.dialog.open(AppUserComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      this.getUsers();
    });
 }

 openDeleteDialog(user: AppUser) {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  // dialogConfig.height = '55%';
  // dialogConfig.width = '50%';
  dialogConfig.data = {
    user: user,
  };
  const deleteDialogRef = this.dialog.open(DeleteDialogComponent, dialogConfig);

  deleteDialogRef.afterClosed().subscribe((result) => {
    this.getUsers();
  });
 }

}
