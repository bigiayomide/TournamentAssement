import { Component, OnInit } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { IEventDetail, IResultVM, StatusEnum } from '../../shared/interfaces/interfaces';
import { ConfigService } from '../../shared/utils/config.service';
import { EventDetailDataService } from '../../shared/services/eventdetail.data.service';
import { ToasterConfig, Toast, BodyOutputType, ToasterService } from 'angular2-toaster';

@Component({
    selector: 'hwb-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
  })

  export class HomeComponent implements OnInit {
    eventDetails: IEventDetail[];
    eventDetail: IEventDetail;
    private _hubConnection: signalR.HubConnection;
    
    public showLoader: boolean = false;
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
    
    constructor(private configService: ConfigService, 
                private dataService:EventDetailDataService,
                private toasterService:ToasterService ) { }   

    ngOnInit(): void {


        this.SignalRHubConnection();
        this.GetEventDetails();
      }

      SignalRHubConnection(){
        this._hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(this.configService.getApiHost()+"/NotifyEventDetail")
        .build();

        this._hubConnection
          .start()
          .then(() => console.log('Connection started!'))
          .catch(err => this.showToast("Error","An Error Ocurred","Error while establishing connection to Signal R :("));
    
          this._hubConnection.onclose(()=>{
              this.showToast("Error","An Error Ocurred","Connection Closed")
          })
          
        this._hubConnection.on('BroadcastMessage', (payload: any ) => {
            debugger;
            this.showLoader = true;
            // this.GetEventDetails();
            this.eventDetail={
                id:payload.id,
                event_id : payload.event_id,
                event_status_id :payload.event_status_id,
                event_detail_name :payload.event_detail_name,
                event_detail_number :payload.event_detail_number,
                event_detail_odd :payload.event_detail_odd,
                finishing_position :payload.finishing_position,
                first_timer :payload.first_timer
                
            }
          var index = this.eventDetails.findIndex(x=>x.id==payload.id);
          if(index==-1){
              
            this.eventDetails.push(this.eventDetail);
          }
          else{
            this.eventDetails[index] = this.eventDetail;
          }
          setTimeout(() => {
            this.showLoader = false;
        },2000)
        });
      }

      GetEventDetails(){

        this.dataService.GetAllEvents().subscribe((result: any) => {
            this.showLoader = true;
            const loginResult = result as IResultVM;
            if (loginResult.status === StatusEnum.Success) {
              this.eventDetails = loginResult.data as IEventDetail[];
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