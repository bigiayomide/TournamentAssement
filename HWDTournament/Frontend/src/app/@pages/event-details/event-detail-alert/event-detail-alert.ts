import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { IDialogMessage } from "../../../shared/interfaces/interfaces";

@Component({
  selector: "hwb-event-detail-alert-dialog",
  templateUrl: "./event-detail-alert.html",
  styleUrls: ["./event-detail-alert.scss"]
})
export class EventDetailAlertDialogComponent implements OnInit {
  _dialogMessage: IDialogMessage;
  constructor(@Inject(MAT_DIALOG_DATA) public data: IDialogMessage) {
    this._dialogMessage = data;
  }

  ngOnInit() {
    this._dialogMessage.valid = false;
  }
  onOkclick() {
    this._dialogMessage.valid = true;
  }
}
