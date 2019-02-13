import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import {
  IDialogMessage,
  IEventDetailStatus
} from "../../../shared/interfaces/interfaces";
import {
  FormGroup,
  FormControl,
  FormGroupDirective,
  NgForm,
  FormBuilder,
  Validators
} from "@angular/forms";
import { ToasterConfig } from "angular2-toaster";

@Component({
  selector: "hwb-status-create-dialog",
  templateUrl: "./event-status-create.html",
  styleUrls: ["./event-status-create.scss"]
})
export class EventStatusCreateDialogComponent implements OnInit {
  eventstatusForm: FormGroup;
  _dialogMessage: IDialogMessage;
  eventstatus: IEventDetailStatus;
  spinnerOn = false;
  config: ToasterConfig;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IDialogMessage,
    private formBuilder: FormBuilder
  ) {
    this._dialogMessage = data;

    (this.eventstatusForm = this.formBuilder.group({
      event_detail_status_name: ["", [Validators.required]]
    })),
      (this.eventstatus = {
        id: 0,
        event_detail_status_name: ""
      });
  }

  ngOnInit() {
    this._dialogMessage.valid = false;
  }
  onSubmitclick() {
    this._dialogMessage.valid = true;
    this.spinnerOn = true;
    this.eventstatus.event_detail_status_name = this.eventstatusForm.get(
      "event_detail_status_name"
    ).value;
    this._dialogMessage.data = this.eventstatus;
  }
}
