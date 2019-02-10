import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import {  IResultVM, StatusEnum, IDialogMessage, IEventDetail } from '../../../shared/interfaces/interfaces';
import { Http } from '@angular/http';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { EventDetailDataService } from '../../../shared/services/eventdetail.data.service';
import { ConfigService } from '../../../shared/utils/config.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatPaginator, MatTableDataSource } from '@angular/material';
import { EventAlertDialogComponent } from '../../events/event-alert/event-alert';
import { EventCreateDialogComponent } from '../../events/event-create/event-create';
import { EventUpdateDialogComponent } from '../../events/event-update/event-update';
import { EventDetailAlertDialogComponent } from '../event-detail-alert/event-detail-alert';
import { EventDetailCreateDialogComponent } from '../event-detail-create/event-detail-create';
import { EventDetailUpdateDialogComponent } from '../event-detail-update/event-detail-update';

@Component({
    selector: 'hwb-event-detail-list',
    templateUrl: './event-detail.component.html',
    styleUrls: ['./event-detail.component.scss']
})

@Injectable()
export class EventDetailComponent implements OnInit {
    public showLoader: boolean = false;
    public eventdetails: IEventDetail[];
    public eventdetail: IEventDetail;

    _dialogMessage: IDialogMessage = {
         message: "Are you sure you want to delete this",
          valid: false,
          data:null,
        };

    constructor(public http: Http,
        private toasterService: ToasterService,
        public dataService: EventDetailDataService,
        private configService: ConfigService,
        public router: Router,
        public dialog: MatDialog) { }
    ngOnInit() {
        this.GetEventdetails()
    }

    reload() {
        this.GetEventdetails();
    }
    GetEventdetails() {
        this.dataService.GetAllEvents().subscribe((result: any) => {
            this.showLoader = true;
            const loginResult = result as IResultVM;
            if (loginResult.status === StatusEnum.Success) {
                this.eventdetails = loginResult.data as IEventDetail[]
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

    onDeleteEventdetails(eventdetaildata:IEventDetail) {
        this._dialogMessage.data= eventdetaildata;
        const dialogRef = this.dialog.open(EventDetailAlertDialogComponent, {
            width: '250px',
            data: this._dialogMessage
        });

        dialogRef.afterClosed().subscribe((dialogresult: IDialogMessage)=> {
            // this.eventdetails = this.eventdetails.filter(x => x.Id != id);
            if (dialogresult.valid === true) {
                this.dataService.DeleteEvent(dialogresult.data.id).subscribe((result: any) => {
                    this.showLoader = true;
                    const eventdetailResult = result as IResultVM;
                    var eventdetail = eventdetailResult.data as IEventDetail
                    if (eventdetailResult.status === StatusEnum.Success) {
                        this.GetEventdetails();
                        this.showToast('success', 'Event Success', 'Deleted ' + eventdetail.event_detail_name + ' Successfuly');
                    } else if (eventdetailResult.status === StatusEnum.Error) {
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
   OnCreateEventdetails(){
    const dialogRef = this.dialog.open(EventDetailCreateDialogComponent, {
        width: '500px',
        data: this._dialogMessage
    });

    dialogRef.afterClosed().subscribe((dialogresult: IDialogMessage)=>  {
        if (dialogresult.valid === true) {
            this.dataService.CreateEvent(dialogresult.data)
            .subscribe((result: any) => {
                this.showLoader = true;
                const eventdetailResult = result as IResultVM;
                var eventdetail = eventdetailResult.data as IEventDetail
                if (eventdetailResult.status === StatusEnum.Success) {
                    this.GetEventdetails();
                    this.showToast('success', 'Event Success', 'Created Tournamnet ' + eventdetail.event_detail_name + ' Successfuly');
                } else if (eventdetailResult.status === StatusEnum.Error) {
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
   onViewEventdetails(eventdetaildata:IEventDetail){
    this._dialogMessage.data= eventdetaildata;
    const dialogRef = this.dialog.open(EventDetailUpdateDialogComponent, {
        width: '500px',
        data: this._dialogMessage
    });

    dialogRef.afterClosed().subscribe((dialogresult: IDialogMessage)=>  {
        debugger;
        if (dialogresult.valid === true) {
            this.dataService.UpdateEvent(dialogresult.data)
            .subscribe((result: any) => {
                this.showLoader = true;
                const eventdetailResult = result as IResultVM;
                var eventdetail = eventdetailResult.data as IEventDetail
                if (eventdetailResult.status === StatusEnum.Success) {
                    this.GetEventdetails();
                    this.showToast('success', 'Event Success', 'Created Tournamnet ' + eventdetail.event_detail_name + ' Successfuly');
                } else if (eventdetailResult.status === StatusEnum.Error) {
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
