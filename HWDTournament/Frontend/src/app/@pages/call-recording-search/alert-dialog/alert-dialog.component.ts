import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {

  message: '';
  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.message = data.message;
   }

  ngOnInit() {
  }

}
