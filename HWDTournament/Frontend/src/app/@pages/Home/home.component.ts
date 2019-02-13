import { Component, OnInit } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { IEventDetail, IResultVM, StatusEnum } from '../../shared/interfaces/interfaces';
import { ConfigService } from '../../shared/utils/config.service';
import { EventDetailDataService } from '../../shared/services/eventdetail.data.service';
import { ToasterConfig, Toast, BodyOutputType, ToasterService } from 'angular2-toaster';
import { trigger, state, style } from '@angular/animations';

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
            ;
            this.showLoader = true;
            this.GetEventDetails();

            var index = this.eventDetails.findIndex(x=>x.id==payload.id);

            let newvalue = this.eventDetails[index];
            const oldbackgroundcolor = newvalue.backgroundColor;
            const color = newvalue.color;
            newvalue.backgroundColor="white";
            newvalue.color="black";
            this.eventDetails[index] = newvalue;
 
          setTimeout(() => {
            this.eventDetails[index].backgroundColor = oldbackgroundcolor
            this.eventDetails[index].color = color
            this.showLoader = false;
        },5000)
        });
      }

      GetEventDetails(){

        this.dataService.GetAllEventDetails().subscribe((result: any) => {
            this.showLoader = true;
            const loginResult = result as IResultVM;
            if (loginResult.status === StatusEnum.Success) {
              this.eventDetails = loginResult.data as IEventDetail[];
              this.SetColors();
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

    SetColors(){
        let order = 0;
        this.eventDetails.forEach(x=>{
   
            x.order=order;
            if(order %2 == 0){
               x.backgroundColor = "darkslateblue";
               x.color = "white"
            }
            else{
              x.backgroundColor = "#efd121"
              x.color = "black"
            }
            order++;
        })
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