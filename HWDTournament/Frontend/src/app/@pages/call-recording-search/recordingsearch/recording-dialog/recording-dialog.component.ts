import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { INexusRecordingElement } from '../../callrecording.models';
import { RecordingSearchService } from '../../callrecording.services/recordingsearch.service';
import { CallDownloadService } from '../../callrecording.services/calldownload.service';
import { DatePipe } from '@angular/common';
import { ConfigService } from '../../../../shared/utils/config.service';


@Component({
  selector: 'app-recording-dialog',
  templateUrl: './recording-dialog.component.html',
  styleUrls: ['./recording-dialog.component.scss']
})
export class RecordingDialogComponent implements OnInit {

  description: string;
  recording: INexusRecordingElement;
  recordingLocation: INexusRecordingElement[];
  recordingRemoteLocation: string;
  filename: string;
  formattedstarttime: string;
  downloadingFile = false;
  apiHost: string;

  constructor(private dialogRef: MatDialogRef<RecordingDialogComponent>, private recordingSearchService: RecordingSearchService,
    @Inject(MAT_DIALOG_DATA) public data, private callRecordingDownloadService: CallDownloadService, private configService: ConfigService) {
    this.description = data.title;
    this.recording = data.recording;
    this.apiHost = this.configService.getApiHost();
  }

  ngOnInit() {
    const datePipe = new DatePipe('en-ZA');
    this.formattedstarttime = datePipe.transform(this.recording.call_StartTime, 'MM/dd/yyyy h:mma');
    this.filename = this.recording.call_ID.toString();
    this.getRecording(this.recording.call_ID);
  }

  // after refactoring this code in not being used but the logic might be used at some point.
  getRecordingLocation(CallId: number) {
    this.recordingSearchService.getRecording(CallId)
      .subscribe((recordingLocation: INexusRecordingElement[]) => {
        if (recordingLocation.length > 1) {
          this.recording.relAddress = recordingLocation[1].relAddress;
        } else {
          this.recording.relAddress = recordingLocation[0].relAddress;
        }
        if (this.recording.relAddress.length > 0) {
          this.filename = this.recording.relAddress.substring(this.recording.relAddress.indexOf('{') + 1,
          this.recording.relAddress.indexOf('}'));
          this.downloadRecordingForReplay(CallId, this.filename);
          this.recordingRemoteLocation = this.apiHost + 'PlayedRecordings/' + this.filename + '.wav';
        }
      }, error => {
          console.log('error searching nexus ' + error);
      });
   }

   getRecording(CallId: number) {
    this.downloadRecordingForReplay(CallId, this.filename);
    this.recordingRemoteLocation = this.apiHost + 'PlayedRecordings/' + CallId + '.wav';
   }

   downloadRecordingForReplay(callId: number, filename: string) {
    this.recordingSearchService.downloadNexusRecording(callId, filename)
    .subscribe(() => {

    }, error => {
        console.log('error downloading nexus recording: ' + error);
    });
   }

   downloadSingleRecording() {
       this.downloadingFile = true;
      this.callRecordingDownloadService.downloadFile(this.filename + '.wav')
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
        this.downloadingFile = false;
        console.log('download error:', JSON.stringify(error));
      }, () => {
        this.downloadingFile = false;
        console.log('Completed file download.'); // notify user than logging
      });
   }

  save() {
    this.dialogRef.close();
  }

  close() {
      this.dialogRef.close();
  }

}
