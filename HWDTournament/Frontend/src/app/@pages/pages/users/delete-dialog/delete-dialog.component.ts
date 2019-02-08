import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AccountDataService } from '../../../../shared/services/account.data.service';
import { AppUser, ResultVM } from '../../../../shared/interfaces';
import { ToasterConfig, Toast, BodyOutputType, ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {
  appUser: AppUser;

  config: ToasterConfig;

  position = 'toast-top-full-width';
  animationType = 'slideDown';
  timeout = 5000;
  toastsLimit = 5;
  type = 'default';

  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;

  constructor(
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public dataService: AccountDataService,
    private toasterService: ToasterService
  ) {
    this.appUser = this.data.user;
  }

  ngOnInit() {
  }

  deleteUser() {
    this.dataService.deleteUser(this.appUser.id).subscribe(
      (result: any) => {
        const registerResult = result as ResultVM;
        this.dialogRef.close();
      },
      error => {
        console.log(error);
        this.showToast(
          'error',
          'Edit User Error',
          'Error occurred while editing a user, please try again!'
        );
      }
    );
  }

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: this.position,
      timeout: this.timeout,
      newestOnTop: this.isNewestOnTop,
      tapToDismiss: this.isHideOnClick,
      preventDuplicates: this.isDuplicatesPrevented,
      animation: this.animationType,
      limit: this.toastsLimit
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: this.timeout,
      showCloseButton: this.isCloseButton,
      bodyOutputType: BodyOutputType.TrustedHtml
    };
    this.toasterService.popAsync(toast);
  }

  close() {
    this.dialogRef.close();
  }
}
