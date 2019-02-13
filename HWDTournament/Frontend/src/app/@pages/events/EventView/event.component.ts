import { Component, OnInit, Injectable, ViewChild } from "@angular/core";
import {
  IResultVM,
  StatusEnum,
  IDialogMessage,
  IEventDetail,
  IEvent
} from "../../../shared/interfaces/interfaces";
import { Http } from "@angular/http";
import {
  ToasterService,
  ToasterConfig,
  Toast,
  BodyOutputType
} from "angular2-toaster";
import { EventDataService } from "../../../shared/services/event.data.service";
import { ConfigService } from "../../../shared/utils/config.service";
import { Router } from "@angular/router";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatPaginator,
  MatTableDataSource,
  MatSort,
  PageEvent
} from "@angular/material";
import { EventAlertDialogComponent } from "../event-alert/event-alert";
import { EventCreateDialogComponent } from "../event-create/event-create";
import { EventUpdateDialogComponent } from "../event-update/event-update";

@Component({
  selector: "hwb-event-list",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.scss"]
})
export class EventComponent implements OnInit {
  public showLoader: boolean = false;
  public eventdetails: IEvent[];
  public eventdetail: IEvent;

  config: ToasterConfig;
  position: string = "toast-top-full-width";
  animationType: string = "slideDown";
  title: string = "HI there!";
  content: string = `I'm cool toaster!`;
  timeout: number = 5000;
  toastsLimit: number = 5;
  type: string = "default";
  isNewestOnTop: boolean = true;
  isHideOnClick: boolean = true;
  isDuplicatesPrevented: boolean = false;
  isCloseButton: boolean = true;
  Id: number;
  tournament_id: number;
  event_name: string;
  event_number: number;
  event_date_time: Date;
  event_end_date_time: Date;
  auto_close: boolean;
  displayedColumns: string[] = [
    "tournament_id",
    "event_name",
    "event_date_time",
    "event_end_date_time",
    "auto_close",
    "actions"
  ];
  eventDataSource: MatTableDataSource<IEvent>;

  resultsLength = 0;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions: number[] = [10, 20, 30, 50];
  pageEvent: PageEvent;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  _dialogMessage: IDialogMessage = {
    message: "Are you sure you want to delete this",
    valid: false,
    data: null
  };

  constructor(
    public http: Http,
    private toasterService: ToasterService,
    public dataService: EventDataService,
    private configService: ConfigService,
    public router: Router,
    public dialog: MatDialog
  ) {}
  ngOnInit() {
    this.GetEvent();
  }

  reload() {
    this.GetEvent();
  }
  GetEvent() {
    this.dataService.GetAllEvents().subscribe(
      (result: any) => {
        this.showLoader = true;
        const loginResult = result as IResultVM;
        if (loginResult.status === StatusEnum.Success) {
          this.eventDataSource = new MatTableDataSource<IEvent>(
            loginResult.data as IEvent[]
          );
          this.eventDataSource.paginator = this.paginator;
        } else if (loginResult.status === StatusEnum.Error) {
          this.showToast(
            "error",
            "Event Error",
            "Error occurred while Loading Events"
          );
        }
        setTimeout(() => {
          this.showLoader = false;
        }, 2000);
      },
      error => {
        console.log(error);
        this.showToast(
          "error",
          "Event Error",
          "Error occurred while Loading Events"
        );
      }
    );
  }

  onDeleteEvent(eventdetaildata: IEvent) {
    this._dialogMessage.data = eventdetaildata;
    const dialogRef = this.dialog.open(EventAlertDialogComponent, {
      width: "250px",
      data: this._dialogMessage
    });

    dialogRef.afterClosed().subscribe((dialogresult: IDialogMessage) => {
      if (dialogresult.valid === true) {
        this.dataService.DeleteEvent(dialogresult.data.id).subscribe(
          (result: any) => {
            this.showLoader = true;
            const eventdetailResult = result as IResultVM;
            const eventdetail = eventdetailResult.data as IEvent;
            if (eventdetailResult.status === StatusEnum.Success) {
              this.GetEvent();
              this.showToast(
                "success",
                "Event Success",
                "Deleted " + eventdetail.event_name + " Successfuly"
              );
            } else if (eventdetailResult.status === StatusEnum.Error) {
              this.showToast(
                "error",
                "Event Error",
                "Error occurred while Loading Events"
              );
            }
            setTimeout(() => {
              this.showLoader = false;
            }, 2000);
          },
          error => {
            console.log(error);
            this.showToast(
              "error",
              "Event Error",
              "Error occurred while Loading Events"
            );
          }
        );
      }
    });
  }
  OnCreateEvent() {
    const dialogRef = this.dialog.open(EventCreateDialogComponent, {
      width: "500px",
      data: this._dialogMessage
    });

    dialogRef.afterClosed().subscribe((dialogresult: IDialogMessage) => {
      if (dialogresult.valid === true) {
        this.dataService.CreateEvent(dialogresult.data).subscribe(
          (result: any) => {
            this.showLoader = true;
            const eventdetailResult = result as IResultVM;
            const eventdetail = eventdetailResult.data as IEvent;
            if (eventdetailResult.status === StatusEnum.Success) {
              this.GetEvent();
              this.showToast(
                "success",
                "Event Success",
                "Created Tournamnet " + eventdetail.event_name + " Successfuly"
              );
            } else if (eventdetailResult.status === StatusEnum.Error) {
              this.showToast(
                "error",
                "Event Error",
                "Error occurred while Loading Events"
              );
            }
            setTimeout(() => {
              this.showLoader = false;
            }, 2000);
          },
          error => {
            console.log(error);
            this.showToast(
              "error",
              "Event Error",
              "Error occurred while Loading Events"
            );
          }
        );
      }
    });
  }
  onViewEvent(eventdetaildata: IEvent) {
    this._dialogMessage.data = eventdetaildata;
    const dialogRef = this.dialog.open(EventUpdateDialogComponent, {
      width: "500px",
      data: this._dialogMessage
    });

    dialogRef.afterClosed().subscribe((dialogresult: IDialogMessage) => {
      if (dialogresult.valid === true) {
        this.dataService.UpdateEvent(dialogresult.data).subscribe(
          (result: any) => {
            this.showLoader = true;
            const eventdetailResult = result as IResultVM;
            const eventdetail = eventdetailResult.data as IEvent;
            if (eventdetailResult.status === StatusEnum.Success) {
              this.GetEvent();
              this.showToast(
                "success",
                "Event Success",
                "Created Tournamnet " + eventdetail.event_name + " Successfuly"
              );
            } else if (eventdetailResult.status === StatusEnum.Error) {
              this.showToast(
                "error",
                "Event Error",
                "Error occurred while Loading Events"
              );
            }
            setTimeout(() => {
              this.showLoader = false;
            }, 2000);
          },
          error => {
            console.log(error);
            this.showToast(
              "error",
              "Event Error",
              "Error occurred while Loading Events"
            );
          }
        );
      }
    });
  }

  makeToast() {
    this.showToast(this.type, this.title, this.content);
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
}
