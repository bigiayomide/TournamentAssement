import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA  } from '@angular/material';
import { IDialogMessage, ITournament } from '../../../shared/interfaces/interfaces';
import { FormGroup, FormControl, FormGroupDirective, NgForm, FormBuilder, Validators } from '@angular/forms';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'hwb-tournament-update-dialog',
  templateUrl: './tournament-update.html',
  styleUrls: ['./tournament-update.scss']
})
export class TournamentUpdateDialogComponent implements OnInit {
  tournamentForm: FormGroup;
  _dialogMessage: IDialogMessage;
  tournament:ITournament;
  spinnerOn = false;
  config: ToasterConfig;  
  constructor(@Inject(MAT_DIALOG_DATA) public data:IDialogMessage,private formBuilder: FormBuilder) {
    this._dialogMessage = data;

    this.tournamentForm = this.formBuilder.group({
       'tournament_name': ['', [
          Validators.required
       ]
    
        ]
      }),    
       this.tournament = {
         tournament_name:''
       }
   }
   

  ngOnInit() {
    ;
    var viewdata= this._dialogMessage.data as ITournament;
    if(viewdata !== undefined){
      this.tournament = this._dialogMessage.data;
      this.tournamentForm.patchValue({tournament_name:viewdata.tournament_name});
      this.tournamentForm.controls["tournament_name"].patchValue(viewdata.tournament_name);
    }

    this._dialogMessage.valid=false;
  }
  onSubmitclick(){
      this._dialogMessage.valid=true;
      this.spinnerOn = true;
      this.tournament.tournament_name = this.tournamentForm.get('tournament_name').value; 
      this._dialogMessage.data=this.tournament; 
  }
}
