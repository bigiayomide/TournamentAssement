import { CallRecordingSearchModule } from './call-recording-search.module';

describe('CallRecordingSearch.ModuleModule', () => {
  let callRecordingSearchModule: CallRecordingSearchModule;

  beforeEach(() => {
    callRecordingSearchModule = new CallRecordingSearchModule();
  });

  it('should create an instance', () => {
    expect(callRecordingSearchModule).toBeTruthy();
  });
});
