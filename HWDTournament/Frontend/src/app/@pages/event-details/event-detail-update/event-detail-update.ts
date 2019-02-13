import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import {
  IDialogMessage,
  IEventDetail,
  IResultVM,
  StatusEnum,
  IEvent,
  IEventDetailStatus
} from "../../../shared/interfaces/interfaces";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { ToasterConfig } from "angular2-toaster";
import { EventStatusDataService } from "../../../shared/services/eventstatus.data.service";
import { EventDataService } from "../../../shared/services/event.data.service";

@Component({
  selector: "hwb-event-status-update-dialog",
  templateUrl: "./event-detail-update.html",
  styleUrls: ["./event-detail-update.scss"]
})
export class EventDetailUpdateDialogComponent implements OnInit {
  eventDetailForm: FormGroup;
  _dialogMessage: IDialogMessage;
  event_status_id = new FormControl("", [Validators.required]);
  event_id = new FormControl("", [Validators.required]);
  eventdetail: IEventDetail;
  events: IEvent[];
  eventstatuses: IEventDetailStatus[];
  spinnerOn = false;
  config: ToasterConfig;
  selectedevent_status_id: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IDialogMessage,
    private formBuilder: FormBuilder,
    private eventStatusDataService: EventStatusDataService,
    private eventDataService: EventDataService
  ) {
    this._dialogMessage = data;

    (this.eventDetailForm = this.formBuilder.group({
      event_detail_name: ["", [Validators.required, Validators.maxLength(50)]],
      event_detail_number: ["", [Validators.required]],
      event_detail_odd: ["", [Validators.required]],
      finishing_position: ["", [Validators.required]],
      first_timer: ["", [Validators.required]]
    })),
      (this.eventdetail = {
        id: 0,
        event_id: 0,
        event_status_id: 0,
        event_detail_name: "",
        event_detail_number: 0,
        event_detail_odd: 0,
        finishing_position: 0,
        first_timer: false
      });
  }

  ngOnInit() {
    const viewdata = this._dialogMessage.data as IEventDetail;
    this.eventStatusDataService.GetAllEventStatus().subscribe(result => {
      const loginResult = result as IResultVM;
      if (loginResult.status === StatusEnum.Success) {
        this.eventstatuses = loginResult.data as IEventDetailStatus[];
        const exisitingvalue = this.eventstatuses.find(
          x => x.id == viewdata.event_status_id
        );
        this.event_status_id.setValue(exisitingvalue);
      } else if (loginResult.status === StatusEnum.Error) {
      }
    });

    this.eventDataService.GetAllEvents().subscribe(result => {
      const loginResult = result as IResultVM;
      if (loginResult.status === StatusEnum.Success) {
        this.events = loginResult.data as IEvent[];
        const exisitingvalue = this.events.find(x => x.id == viewdata.event_id);
        this.event_id.setValue(exisitingvalue);
      } else if (loginResult.status === StatusEnum.Error) {
      }
    });

    if (viewdata !== undefined) {
      this.eventdetail = this._dialogMessage.data;
      this.eventDetailForm.controls["event_detail_name"].patchValue(
        viewdata.event_detail_name
      );
      this.eventDetailForm.controls["event_detail_number"].patchValue(
        viewdata.event_detail_number
      );
      this.eventDetailForm.controls["event_detail_odd"].patchValue(
        viewdata.event_detail_odd
      );
      this.eventDetailForm.controls["finishing_position"].patchValue(
        viewdata.finishing_position
      );
      this.eventDetailForm.controls["first_timer"].patchValue(
        viewdata.first_timer
      );
    }
    this._dialogMessage.valid = false;
  }

  onSubmitclick() {
    this._dialogMessage.valid = true;
    this.spinnerOn = true;
    this.eventdetail.event_id = this.event_id.value.id;
    this.eventdetail.event_status_id = this.event_status_id.value.id;
    this.eventdetail.event_detail_name = this.eventDetailForm.get(
      "event_detail_name"
    ).value;
    this.eventdetail.event_detail_number = this.eventDetailForm.get(
      "event_detail_number"
    ).value;
    this.eventdetail.event_detail_odd = this.eventDetailForm.get(
      "event_detail_odd"
    ).value;
    this.eventdetail.finishing_position = this.eventDetailForm.get(
      "finishing_position"
    ).value;
    this.eventdetail.first_timer = this.eventDetailForm.get(
      "first_timer"
    ).value;
    this._dialogMessage.data = this.eventdetail;
  }
}
