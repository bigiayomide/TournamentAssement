import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA  } from '@angular/material';
import { IDialogMessage, IEvent, ITournament, IResultVM, StatusEnum } from '../../../shared/interfaces/interfaces';
import { FormGroup, FormControl, FormGroupDirective, NgForm, FormBuilder, Validators } from '@angular/forms';
import { ToasterConfig } from 'angular2-toaster';
import { TournamentDataService } from '../../../shared/services/tournament.data.service';

@Component({
  selector: 'hwb-Event-update-dialog',
  templateUrl: './Event-update.html',
  styleUrls: ['./Event-update.scss']
})
export class EventUpdateDialogComponent implements OnInit {
  eventForm: FormGroup;
  _dialogMessage: IDialogMessage;
  event:IEvent;
  tournament_id = new FormControl('', [Validators.required]);
  tournaments: ITournament[]; 
  spinnerOn = false;
  config: ToasterConfig;  
  constructor(@Inject(MAT_DIALOG_DATA) public data:IDialogMessage,
                                      private formBuilder: FormBuilder,
                                      private tournamentDataService:TournamentDataService ) {
    this._dialogMessage = data;

    this.eventForm = this.formBuilder.group({
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
        id: 0,
        tournament_id: 0,
        event_number: 0,
        event_date_time: new Date(),
        event_end_date_time: new Date(),
        auto_close: false
         
      }
   }
   

   ngOnInit() {
    var viewdata= this._dialogMessage.data as IEvent;
    this.tournamentDataService.GetAllTournaments().subscribe((result) => {

      const loginResult = result as IResultVM;
      if (loginResult.status === StatusEnum.Success) {
          this.tournaments = loginResult.data as ITournament[];
          const getselected=this.tournaments.find(x=>x.id == viewdata.tournament_id)
          this.tournament_id.setValue(getselected);
      } else if (loginResult.status === StatusEnum.Error) {

      }
    });

    if(viewdata !== undefined){
      this.event = this._dialogMessage.data;
      debugger;
      this.eventForm.controls["event_number"].patchValue(viewdata.event_number);
      this.eventForm.controls["event_date_time"].patchValue(viewdata.event_date_time);
      this.eventForm.controls["event_date_time"].patchValue(viewdata.event_date_time);
      this.eventForm.controls["event_end_date_time"].patchValue(viewdata.event_end_date_time);
      this.eventForm.controls["auto_close"].patchValue(viewdata.auto_close);
      this.eventForm.controls["event_name"].patchValue(viewdata.event_name);
      
    }
  
    this._dialogMessage.valid=false;
  }
  onSubmitclick(){
    this._dialogMessage.valid=true;
    this.spinnerOn = true;
    this.event.tournament_id = this.tournament_id.value.id; 
    this.event.event_number = this.eventForm.get('event_number').value; 
    this.event.event_name = this.eventForm.get('event_name').value; 
    this.event.event_date_time = this.eventForm.get('event_date_time').value; 
    this.event.event_end_date_time = this.eventForm.get('event_end_date_time').value; 
    this.event.auto_close = this.eventForm.get('auto_close').value;   
    this._dialogMessage.data=this.event; 
  }
}
