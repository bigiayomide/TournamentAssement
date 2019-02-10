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
import { EventDataService } from '../../../shared/services/event.data.service';

@Component({
    selector: 'hwb-event-list',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss']
})

@Injectable()
export class EventComponent implements OnInit {
    _dialogMessage: IDialogMessage = {
         message: "Are you sure you want to delete this",
          valid: false,
          data:null,
        };

    constructor(public http: Http,
        private toasterService: ToasterService,
        public dataService: EventDataService,
        private configService: ConfigService,
        public router: Router,
        public dialog: MatDialog) { }

    public showLoader: boolean = false;
    public events: IEventDetailStatus[];
    public event: IEventDetailStatus;
    ngOnInit() {
        this.GetEvent()
    }

    reload() {
        this.GetEvent();
    }
    GetEvent() {
        this.dataService.GetAllEvents().subscribe((result: any) => {
            this.showLoader = true;
            const loginResult = result as IResultVM;
            this.events = loginResult.data as IEventDetailStatus[]
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

    onDeleteEvent(eventdata:IEventDetailStatus) {
        this._dialogMessage.data= eventdata;
        const dialogRef = this.dialog.open(EventAlertDialogComponent, {
            width: '250px',
            data: this._dialogMessage
        });

        dialogRef.afterClosed().subscribe((dialogresult: IDialogMessage)=> {
            // this.events = this.events.filter(x => x.Id != id);
            if (dialogresult.valid === true) {
                this.dataService.DeleteEvent(dialogresult.data.id).subscribe((result: any) => {
                    this.showLoader = true;
                    const eventResult = result as IResultVM;
                    var event = eventResult.data as IEventDetailStatus
                    if (eventResult.status === StatusEnum.Success) {
                        this.GetEvent();
                        this.showToast('success', 'Event Success', 'Deleted ' + event.event_detail_status_name + ' Successfuly');
                    } else if (eventResult.status === StatusEnum.Error) {
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
   OnCreateEvent(){
    const dialogRef = this.dialog.open(EventCreateDialogComponent, {
        width: '500px',
        data: this._dialogMessage
    });

    dialogRef.afterClosed().subscribe((dialogresult: IDialogMessage)=>  {
        if (dialogresult.valid === true) {
            this.dataService.CreateEvent(dialogresult.data)
            .subscribe((result: any) => {
                this.showLoader = true;
                const eventResult = result as IResultVM;
                var event = eventResult.data as IEventDetailStatus
                if (eventResult.status === StatusEnum.Success) {
                    this.GetEvent();
                    this.showToast('success', 'Event Success', 'Created Tournamnet ' + event.event_detail_status_name + ' Successfuly');
                } else if (eventResult.status === StatusEnum.Error) {
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
   onViewEvent(eventdata:IEventDetailStatus){
    this._dialogMessage.data= eventdata;
    const dialogRef = this.dialog.open(EventUpdateDialogComponent, {
        width: '500px',
        data: this._dialogMessage
    });

    dialogRef.afterClosed().subscribe((dialogresult: IDialogMessage)=>  {
        debugger;
        if (dialogresult.valid === true) {
            this.dataService.UpdateEvent(dialogresult.data)
            .subscribe((result: any) => {
                this.showLoader = true;
                const eventResult = result as IResultVM;
                var event = eventResult.data as IEventDetailStatus
                if (eventResult.status === StatusEnum.Success) {
                    this.GetEvent();
                    this.showToast('success', 'Event Success', 'Created Events ' + event.event_detail_status_name + ' Successfuly');
                } else if (eventResult.status === StatusEnum.Error) {
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
