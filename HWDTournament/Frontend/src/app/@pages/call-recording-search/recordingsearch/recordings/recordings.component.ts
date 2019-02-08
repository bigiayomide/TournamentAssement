import { Component, OnInit, ViewChild } from '@angular/core';
import { INexusRecordingElement, ISearchViewModel, RecordingItem, ISelectedModel } from '../../callrecording.models';
import { RecordingSearchService } from '../../callrecording.services/recordingsearch.service';
import {SelectionModel} from '@angular/cdk/collections';
import { MatPaginator, MatTableDataSource, MatDialog, MatDialogConfig, PageEvent, MatSort } from '@angular/material';
import { RecordingDialogComponent } from '../recording-dialog/recording-dialog.component';
import { Data } from '../../callrecording.providers/data';
import { Location } from '@angular/common';
import { CallDownloadService } from '../../callrecording.services/calldownload.service';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { Router } from '@angular/router';
import { AlertDialogComponent } from '../../alert-dialog/alert-dialog.component';


@Component({
  selector: 'app-recordings',
  templateUrl: './recordings.component.html',
  styleUrls: ['./recordings.component.scss']
})
export class RecordingsComponent implements OnInit {

  searchModel: ISearchViewModel;
  displayedColumns: string[] = ['select', 'AccountCode', 'CallID', 'Agent', 'Call StartTime',
  'Telephone #', 'Duration', 'Data Size', 'actions'];
  // recordingsData: INexusRecordingElement[];
  recordingsDataSource: MatTableDataSource<INexusRecordingElement>;
  selection = new SelectionModel<INexusRecordingElement>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // @Output() navigateBackEvent = new EventEmitter<ISearchViewModel>();

  records: RecordingItem[] = [];
  resultsLength  = 0;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions: number[] = [10, 20, 30, 50];
  pageEvent: PageEvent;

  config: ToasterConfig;
    position = 'toast-top-full-width';
    animationType = 'slideDown';
    timeout = 5000;
    toastsLimit = 5;
    type = 'default';
    isNewestOnTop = true;
    isHideOnClick = true;
    isDuplicatesPrevented = false;
    isCloseButton = true;

  isLoadingResults = true;
  isRateLimitReached = false;
  isSelectionLimitReached = false;
  selectionLimit = 10;
  downloadingSelection = false;

  initialSelection = [];
  allowMultiSelect = true;


  constructor(private recordingSearchService: RecordingSearchService, private dialog: MatDialog, private location: Location,
    private callRecordingDownloadService: CallDownloadService, private data: Data, private toasterService: ToasterService,
    private router: Router) { }

  ngOnInit() {
    this.searchModel = this.data.storage;
    this.nexusSearch(this.searchModel, this.pageIndex, this.pageSize);

    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    // merge(this.sort.sortChange, this.paginator.page)
    //   .pipe(
    //     startWith({}),
    //     switchMap(() => {
    //       this.isLoadingResults = true;
    //       return this.recordingSearchService.(
    //         this.sort.active, this.sort.direction, this.paginator.pageIndex);
    //     }),
    //     map(data => {
    //       // Flip flag to show that loading has finished.
    //       this.isLoadingResults = false;
    //       this.isRateLimitReached = false;
    //       this.resultsLength = data.total_count;

    //       return data.items;
    //     }),
    //     catchError(() => {
    //       this.isLoadingResults = false;
    //       // Catch if the GitHub API has reached its rate limit. Return empty data.
    //       this.isRateLimitReached = true;
    //       return observableOf([]);
    //     })
    //   ).subscribe(data => this.records = data);

  }

  nexusSearch(searchModel: ISearchViewModel, pageIndex: number, pageSize: number ) {
    this.recordingSearchService.searchNexus(searchModel, pageIndex, pageSize)
    .subscribe((recordings: INexusRecordingElement[]) => {
      this.recordingsDataSource = new MatTableDataSource<INexusRecordingElement>(recordings);
      this.recordingsDataSource.paginator = this.paginator;
      this.isLoadingResults = false;
    }, error => {
        console.log('error searching nexus ' + error);
        this.isLoadingResults = false;
    });
   }

    openDialog(recording: INexusRecordingElement) {

      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      // dialogConfig.height = '50%';
      // dialogConfig.width = '55%';
      dialogConfig.data = {
        recording: recording,
        title: 'Recording Details',
      };
      const dialogRef = this.dialog.open(RecordingDialogComponent, dialogConfig);

      dialogRef.afterClosed().subscribe((result) => {
        // console.log(result);
        this.removeDownloadedRecording(recording.call_ID);
      });
   }

   alertDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    // dialogConfig.height = '60%';
    dialogConfig.width = '40%';
    dialogConfig.data = {
      message: 'Your download has been initiated, an email will be sent with the location to retrieve the download!',
    };
    const alertDialogRef = this.dialog.open(AlertDialogComponent, dialogConfig);
    alertDialogRef.afterClosed().subscribe(result => {
      // NOTE: The result can also be nothing if the user presses the `esc` key or clicks outside the dialog
      if (result === 'confirm') {
        this.router.navigate(['./auth/recordings/home']);
      }
      // this.router.navigate(['./auth/recordings/home']);
    });
   }

   removeDownloadedRecording(callId: number)  {
    this.recordingSearchService.removeDownloadedNexusRecording(callId)
    .subscribe(() => {

   }, error => {
       console.log('error deleting file: ' + error);
   });
  }

  navigateBack() {
   this.location.back();
  }

  applyFilter(filterValue: string) {
    this.recordingsDataSource.filter = filterValue.trim().toLowerCase();

    if (this.recordingsDataSource.paginator) {
      this.recordingsDataSource.paginator.firstPage();
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.recordingsDataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.recordingsDataSource.data.forEach(row => this.selection.select(row));
  }

  checkSelectedItems(row: any) {
    if (this.selection.selected.length >= 10) {
      this.isSelectionLimitReached = true;
      this.selection.toggle(row);
      alert('you have reached the maximum number of selections');
    }
  }

  downloadSelected() {
    const selectedRecordings = [];
    for (const item of this.selection.selected) {
      selectedRecordings.push(item.call_ID);
    }
    const selectionModel: ISelectedModel = {
     CallIds:  selectedRecordings
    };
    if (selectedRecordings === undefined || selectedRecordings.length === 0) {
      // array empty or does not exist
      alert('select recordings to first');
    } else {
        this.downloadSelectedRecording(selectionModel);
    }
  }

  downloadAll() {
    this.recordingsDataSource.data.forEach(row => this.selection.select(row));
    const selectedRecordings = [];
    for (const item of this.selection.selected) {
      selectedRecordings.push(item.call_ID);
    }
    const selectionModel: ISelectedModel = {
     CallIds:  selectedRecordings
    };
    this.callRecordingDownloadService.downloadAll(selectionModel)
    .subscribe( res => {
      this.alertDialog();
     // this.router.navigate(['./auth/recordings/home']);
    }, error => {
      console.log('download error:', JSON.stringify(error));
    }
    );
  }

  downloadSelectedRecording(selectionModel: ISelectedModel) {
    this.downloadingSelection = true;
    this.callRecordingDownloadService.downloadSelection(selectionModel)
    .subscribe(res => {
      console.log('start download:', res);
      const url = window.URL.createObjectURL(res.data);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.href = url;
      a.download = res.filename;
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove(); // remove the element
    }, error => {
      console.log('download error:', JSON.stringify(error));
      this.downloadingSelection = false;
    }, () => {
      this.downloadingSelection = false;
      console.log('Completed file download.');
    });
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
