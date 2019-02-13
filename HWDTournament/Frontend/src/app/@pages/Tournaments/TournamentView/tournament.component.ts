import { Component, OnInit, Injectable } from '@angular/core';
import { ITournament, IResultVM, StatusEnum, IDialogMessage } from '../../../shared/interfaces/interfaces';
import { Http } from '@angular/http';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TournamentDataService } from '../../../shared/services/tournament.data.service';
import { ConfigService } from '../../../shared/utils/config.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TournamentAlertDialogComponent } from '../tournament-alert/tournament-alert';
import { TournamentCreateDialogComponent } from '../tournament-create/tournament-create';
import { TournamentUpdateDialogComponent } from '../tournament-update/tournament-update';

@Component({
    selector: 'hwb-tournament-list',
    templateUrl: './tournament.component.html',
    styleUrls: ['./tournament.component.scss']
})

@Injectable()
export class TournamentComponent implements OnInit {

    _dialogMessage: IDialogMessage = {
         message: "Are you sure you want to delete this",
          valid: false,
          data:null,
        };

    constructor(public http: Http,
        private toasterService: ToasterService,
        public dataService: TournamentDataService,
        private configService: ConfigService,
        public router: Router,
        public dialog: MatDialog) { }

    public showLoader: boolean = false;
    public tournaments: ITournament[];
    public tournament: ITournament;
    ngOnInit() {
        this.GetTournamnets()
    }

    reload() {
        this.GetTournamnets();
    }
    GetTournamnets() {
        this.dataService.GetAllTournaments().subscribe((result: any) => {
            this.showLoader = true;
            const loginResult = result as IResultVM;
            this.tournaments = loginResult.data as ITournament[]
            if (loginResult.status === StatusEnum.Success) {
            } else if (loginResult.status === StatusEnum.Error) {

                this.showToast('error', 'Tournament Error', 'Error occurred while Loading Tournanments');
            }
            setTimeout(() => {
                this.showLoader = false;
            },2000)
        },
            error => {
                console.log(error);
                this.showToast('error', 'Tournament Error', 'Error occurred while Loading Tournanments');
            });
    }

    onDeleteTournament(tournamentdata:ITournament) {
        this._dialogMessage.data= tournamentdata;
        const dialogRef = this.dialog.open(TournamentAlertDialogComponent, {
            width: '250px',
            data: this._dialogMessage
        });

        dialogRef.afterClosed().subscribe((dialogresult: IDialogMessage)=> {
            // this.tournaments = this.tournaments.filter(x => x.Id != id);
            if (dialogresult.valid === true) {
                this.dataService.DeleteTournament(dialogresult.data.id).subscribe((result: any) => {
                    this.showLoader = true;
                    const tournamentResult = result as IResultVM;
                    var tournamen = tournamentResult.data as ITournament
                    if (tournamentResult.status === StatusEnum.Success) {
                        this.GetTournamnets();
                        this.showToast('success', 'Tournament Success', 'Deleted ' + tournamen.tournament_name + ' Successfuly');
                    } else if (tournamentResult.status === StatusEnum.Error) {
                        this.showToast('error', 'Tournament Error', 'Error occurred while Loading Tournanments');
                    }
                    setTimeout(() => {
                        this.showLoader = false;
                    },2000)
                },
                    error => {
                        console.log(error);
                        this.showToast('error', 'Tournament Error', 'Error occurred while Loading Tournanments');
                    });

            }
        });

    }
   OnCreateTournament(){
    const dialogRef = this.dialog.open(TournamentCreateDialogComponent, {
        width: '500px',
        data: this._dialogMessage
    });

    dialogRef.afterClosed().subscribe((dialogresult: IDialogMessage)=>  {
        if (dialogresult.valid === true) {
            this.dataService.CreateTournament(dialogresult.data)
            .subscribe((result: any) => {
                this.showLoader = true;
                const tournamentResult = result as IResultVM;
                var tournament = tournamentResult.data as ITournament
                if (tournamentResult.status === StatusEnum.Success) {
                    this.GetTournamnets();
                    this.showToast('success', 'Tournament Success', 'Created Tournamnet ' + tournament.tournament_name + ' Successfuly');
                } else if (tournamentResult.status === StatusEnum.Error) {
                    this.showToast('error', 'Tournament Error', 'Error occurred while Loading Tournanments');
                }
                setTimeout(() => {
                    this.showLoader = false;
                },2000)
            },
            error => {
                console.log(error);
                this.showToast('error', 'Tournament Error', 'Error occurred while Loading Tournanments');
            });

        }
    });

   }
   onViewTournament(tournamentdata:ITournament){
    this._dialogMessage.data= tournamentdata;
    const dialogRef = this.dialog.open(TournamentUpdateDialogComponent, {
        width: '500px',
        data: this._dialogMessage
    });

    dialogRef.afterClosed().subscribe((dialogresult: IDialogMessage)=>  {
        ;
        if (dialogresult.valid === true) {
            this.dataService.UpdateTournament(dialogresult.data)
            .subscribe((result: any) => {
                this.showLoader = true;
                const tournamentResult = result as IResultVM;
                var tournament = tournamentResult.data as ITournament
                if (tournamentResult.status === StatusEnum.Success) {
                    this.GetTournamnets();
                    this.showToast('success', 'Tournament Success', 'Created Tournamnet ' + tournament.tournament_name + ' Successfuly');
                } else if (tournamentResult.status === StatusEnum.Error) {
                    this.showToast('error', 'Tournament Error', 'Error occurred while Loading Tournanments');
                }
                setTimeout(() => {
                    this.showLoader = false;
                },2000)
            },
            error => {
                console.log(error);
                this.showToast('error', 'Tournament Error', 'Error occurred while Loading Tournanments');
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
