import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA  } from '@angular/material';
import { IDialogMessage, IEvent } from '../../../shared/interfaces/interfaces';
import { FormGroup, FormControl, FormGroupDirective, NgForm, FormBuilder, Validators } from '@angular/forms';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'hwb-Event-create-dialog',
  templateUrl: './Event-create.html',
  styleUrls: ['./Event-create.scss']
})
export class EventCreateDialogComponent implements OnInit {
  eventForm: FormGroup;
  _dialogMessage: IDialogMessage;
  event:IEvent;
  spinnerOn = false;
  config: ToasterConfig;  
  constructor(@Inject(MAT_DIALOG_DATA) public data:IDialogMessage,private formBuilder: FormBuilder) {
    this._dialogMessage = data;

    this.eventForm = this.formBuilder.group({
       'tournament_id': ['', [
          Validators.required
       ]
    
        ],
        'event_name': ['', [
          Validators.required
       ]
    
        ],
        'event_number': ['', [
          Validators.required
       ]
    
        ],
        'event_date_time': ['', [
          Validators.required
       ]
    
        ],
        'event_end_date_time': ['', [
          Validators.required
       ]
    
        ],
        'auto_close': ['', [
          Validators.required
       ]
    
        ],
      }),    
      this.event = {
        event_name:'',
        Id: 0,
        tournament_id: 0,
        event_number: 0,
        event_date_time: new Date(),
        event_end_date_time: new Date(),
        auto_close: false
         
      }
   }
   

  ngOnInit() {

    this._dialogMessage.valid=false;
  }
  onSubmitclick(){
    this._dialogMessage.valid=true;
    this.spinnerOn = true;
    this.event.tournament_id = this.eventForm.get('tournament_id').value; 
    this.event.event_number = this.eventForm.get('event_number').value; 
    this.event.event_name = this.eventForm.get('event_name').value; 
    this.event.event_date_time = this.eventForm.get('event_date_time').value; 
    this.event.event_end_date_time = this.eventForm.get('event_end_date_time').value; 
    this.event.auto_close = this.eventForm.get('auto_close').value;   
    this._dialogMessage.data=this.event; 
    debugger;
  }
}
