import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA  } from '@angular/material';
import { IDialogMessage, IEventDetail } from '../../../shared/interfaces/interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'hwb-event-detail-create-dialog',
  templateUrl: './event-detail-create.html',
  styleUrls: ['./event-detail-create.scss']
})
export class EventDetailCreateDialogComponent implements OnInit {
  eventDetailForm: FormGroup;
  _dialogMessage: IDialogMessage;
  eventdetail:IEventDetail;
  spinnerOn = false;
  config: ToasterConfig;
  constructor(@Inject(MAT_DIALOG_DATA) public data:IDialogMessage,private formBuilder: FormBuilder) {
    this._dialogMessage = data;

    this.eventDetailForm = this.formBuilder.group({
       'event_id': ['', [
          Validators.required,
       ]
    
        ],
        'event_status_id': ['', [
          Validators.required
       ]
    
        ],
        'event_detail_name': ['', [
          Validators.required,
          Validators.maxLength(50)
       ]
    
        ],
        'event_detail_number': ['', [
          Validators.required
       ]
    
        ],
        'event_detail_odd': ['', [
          Validators.required
       ]
    
        ],
        'finishing_position': ['', [
          Validators.required
       ]
    
        ],
        'first_timer': ['', [
          Validators.required
       ]
    
        ],
      }),    
       this.eventdetail = {
        Id :0,
        event_id :0,
        event_status_id :0,
        event_detail_name :'',
        event_detail_number :0,
        event_detail_odd :0,
        finishing_position :0,
        first_timer :false
       }
   }
   

   ngOnInit() {
    this._dialogMessage.valid=false;
  }
  onSubmitclick(){
      this._dialogMessage.valid=true;
      this.spinnerOn = true;
      this.eventdetail.event_id = this.eventDetailForm.get('event_id').value; 
      this.eventdetail.event_status_id = this.eventDetailForm.get('event_status_id').value; 
      this.eventdetail.event_detail_name = this.eventDetailForm.get('event_detail_name').value; 
      this.eventdetail.event_detail_number = this.eventDetailForm.get('event_detail_number').value; 
      this.eventdetail.event_detail_odd = this.eventDetailForm.get('event_detail_odd').value; 
      this.eventdetail.finishing_position = this.eventDetailForm.get('finishing_position').value; 
      this.eventdetail.first_timer = this.eventDetailForm.get('first_timer').value;   
      this._dialogMessage.data=this.eventdetail; 
  }
}
