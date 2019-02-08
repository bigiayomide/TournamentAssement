import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallRecordingSearchComponent } from './call-recording-search.component';

describe('CallRecordingSearchComponent', () => {
  let component: CallRecordingSearchComponent;
  let fixture: ComponentFixture<CallRecordingSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallRecordingSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallRecordingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
