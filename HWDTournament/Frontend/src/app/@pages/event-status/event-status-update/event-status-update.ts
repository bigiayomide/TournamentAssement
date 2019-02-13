import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA  } from '@angular/material';
import { IDialogMessage, ITournament, IEventDetailStatus } from '../../../shared/interfaces/interfaces';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'hwb-event-status-update-dialog',
  templateUrl: './event-status-update.html',
  styleUrls: ['./event-status-update.scss']
})
export class EventStatusUpdateDialogComponent implements OnInit {
  eventStatusForm: FormGroup;
  _dialogMessage: IDialogMessage;
  eventdetailstatus:IEventDetailStatus;
  spinnerOn = false;
  config: ToasterConfig;  
  constructor(@Inject(MAT_DIALOG_DATA) public data:IDialogMessage,private formBuilder: FormBuilder) {
    this._dialogMessage = data;

    this.eventStatusForm = this.formBuilder.group({
       'event_detail_status_name': ['', [
          Validators.required
       ]
    
        ]
      }),    
       this.eventdetailstatus = {
        event_detail_status_name:'',
        id:0
       }
   }
   

  ngOnInit() {
    ;
    var viewdata= this._dialogMessage.data as IEventDetailStatus;
    if(viewdata !== undefined){
      this.eventdetailstatus = this._dialogMessage.data;
      this.eventStatusForm.patchValue({tournament_name:viewdata.event_detail_status_name});
      this.eventStatusForm.controls["event_detail_status_name"].patchValue(viewdata.event_detail_status_name);
    }

    this._dialogMessage.valid=false;
  }
  onSubmitclick(){
      this._dialogMessage.valid=true;
      this.spinnerOn = true;
      this.eventdetailstatus.event_detail_status_name = this.eventStatusForm.get('event_detail_status_name').value; 
      this._dialogMessage.data=this.eventdetailstatus; 
  }
}
