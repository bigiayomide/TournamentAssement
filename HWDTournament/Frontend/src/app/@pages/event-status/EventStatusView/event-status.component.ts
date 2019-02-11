import { Component, OnInit, Injectable } from '@angular/core';
import { IEventDetailStatus, IResultVM, StatusEnum, IDialogMessage } from '../../../shared/interfaces/interfaces';
import { Http } from '@angular/http';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { EventDetailDataService } from '../../../shared/services/eventdetail.data.service';
import { ConfigService } from '../../../shared/utils/config.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventAlertDialogComponent } from '../../events/event-alert/event-alert';
import { EventCreateDialogComponent } from '../../events/event-create/event-create';
import { EventUpdateDialogComponent } from '../../events/event-update/event-update';
import { EventStatusDataService } from '../../../shared/services/eventstatus.data.service';
import { EventStatusCreateDialogComponent } from '../event-status-create/event-status-create';
import { EventStatusUpdateDialogComponent } from '../event-status-update/event-status-update';
import { EventStatusAlertDialogComponent } from '../event-status-alert/event-status-alert';

@Component({
    selector: 'hwb-event-status-list',
    templateUrl: './event-status.component.html',
    styleUrls: ['./event-status.component.scss']
})

@Injectable()
export class EventStatusComponent implements OnInit {

    _dialogMessage: IDialogMessage = {
         message: "Are you sure you want to delete this",
          valid: false,
          data:null,
        };

      config: ToasterConfig;
      position: string = 'toast-top-full-width';
      animationType: string = 'slideDown';
      title: string = 'HI there!';
      content: string = `I'm cool toaster!`;
      timeout: number = 5000;
      toastsLimit: number = 5;
      type: string = 'default';
      isNewestOnTop: boolean = true;
      isHideOnClick: boolean = true;
      isDuplicatesPrevented: boolean = false;
      isCloseButton: boolean = true;

    constructor(public http: Http,
        private toasterService: ToasterService,
        public dataService: EventStatusDataService,
        private configService: ConfigService,
        public router: Router,
        public dialog: MatDialog) { }

    public showLoader: boolean = false;
    public eventstatuss: IEventDetailStatus[];
    public eventstatus: IEventDetailStatus;
    ngOnInit() {
        this.GetStatusDetails()
    }

    reload() {
        this.GetStatusDetails();
    }
    GetStatusDetails() {
        this.dataService.GetAllEventStatus().subscribe((result: any) => {
            this.showLoader = true;
            const loginResult = result as IResultVM;
            this.eventstatuss = loginResult.data as IEventDetailStatus[]
            if (loginResult.status === StatusEnum.Success) {
            } else if (loginResult.status === StatusEnum.Error) {

                this.showToast('error', 'Event Error', 'Error occurred while Loading Events');
            }
            setTimeout(() => {
                this.showLoader = false;
            },2000)
        },
            error => {
                console.log(error);
                this.showToast('error', 'Event Error', 'Error occurred while Loading Events');
            });
    }

    onDeleteStatusDetail(eventstatusdata:IEventDetailStatus) {
        this._dialogMessage.data= eventstatusdata;
        const dialogRef = this.dialog.open(EventStatusAlertDialogComponent, {
            width: '250px',
            data: this._dialogMessage
        });

        dialogRef.afterClosed().subscribe((dialogresult: IDialogMessage)=> {
            // this.eventstatuss = this.eventstatuss.filter(x => x.Id != id);
            if (dialogresult.valid === true) {
                this.dataService.DeleteEventStatus(dialogresult.data.id).subscribe((result: any) => {
                    this.showLoader = true;
                    const eventstatusResult = result as IResultVM;
                    const eventstatus = eventstatusResult.data as IEventDetailStatus
                    if (eventstatusResult.status === StatusEnum.Success) {
                        this.GetStatusDetails();
                        this.showToast('success', 'Event Success', 'Deleted ' + eventstatus.event_detail_status_name + ' Successfuly');
                    } else if (eventstatusResult.status === StatusEnum.Error) {
                        this.showToast('error', 'Event Error', 'Error occurred while Loading Events');
                    }
                    setTimeout(() => {
                        this.showLoader = false;
                    },2000)
                },
                    error => {
                        console.log(error);
                        this.showToast('error', 'Event Error', 'Error occurred while Loading Events');
                    });

            }
        });

    }
   OnCreateStatusDetail(){
    const dialogRef = this.dialog.open(EventStatusCreateDialogComponent, {
        width: '500px',
        data: this._dialogMessage
    });

    dialogRef.afterClosed().subscribe((dialogresult: IDialogMessage)=>  {
        if (dialogresult.valid === true) {
            this.dataService.CreateEventStatus(dialogresult.data)
            .subscribe((result: any) => {
                this.showLoader = true;
                const eventstatusResult = result as IResultVM;
                const eventstatus = eventstatusResult.data as IEventDetailStatus
                if (eventstatusResult.status === StatusEnum.Success) {
                    this.GetStatusDetails();
                    this.showToast('success', 'Event Success', 'Created Tournamnet ' + eventstatus.event_detail_status_name + ' Successfuly');
                } else if (eventstatusResult.status === StatusEnum.Error) {
                    this.showToast('error', 'Event Error', 'Error occurred while Loading Events');
                }
                setTimeout(() => {
                    this.showLoader = false;
                },2000)
            },
            error => {
                console.log(error);
                this.showToast('error', 'Event Error', 'Error occurred while Loading Events');
            });

        }
    });

   }
   onViewStatusDetail(eventstatusdata:IEventDetailStatus){
    this._dialogMessage.data= eventstatusdata;
    const dialogRef = this.dialog.open(EventStatusUpdateDialogComponent, {
        width: '500px',
        data: this._dialogMessage
    });

    dialogRef.afterClosed().subscribe((dialogresult: IDialogMessage)=>  {
        if (dialogresult.valid === true) {
            this.dataService.UpdateEventStatus(dialogresult.data)
            .subscribe((result: any) => {
                this.showLoader = true;
                const eventstatusResult = result as IResultVM;
                const eventstatus = eventstatusResult.data as IEventDetailStatus
                if (eventstatusResult.status === StatusEnum.Success) {
                    this.GetStatusDetails();
                    this.showToast('success', 'Event Success', 'Created Tournamnet ' + eventstatus.event_detail_status_name + ' Successfuly');
                } else if (eventstatusResult.status === StatusEnum.Error) {
                    this.showToast('error', 'Event Error', 'Error occurred while Loading Events');
                }
                setTimeout(() => {
                    this.showLoader = false;
                },2000)
            },
            error => {
                console.log(error);
                this.showToast('error', 'Event Error', 'Error occurred while Loading Events');
            });
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
            limit: this.toastsLimit,
        });
        const toast: Toast = {
            type: type,
            title: title,
            body: body,
            timeout: this.timeout,
            showCloseButton: this.isCloseButton,
            bodyOutputType: BodyOutputType.TrustedHtml,
        };
        this.toasterService.popAsync(toast);
    }

}
