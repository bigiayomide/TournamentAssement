
export interface ISearchViewModel {
    businessUnit: string;
    database: string;
    classHash?: string;
    comment?: string;
    book: string;
    agentGroup?: number;
    empCode?: string;
    accountNo?: string;
    accountNoOld?: string;
    customerFirstName?: string;
    secondName?: string;
    phoneNumber?: string;
    customerId?: string;
    emailAddress?: string;
    dateFrom: Date;
    dateTo: Date;
}

export class ISearchModel {
    name: string;
    value: string;

    constructor(name: string, value: string) { }
}

export interface ISearchResult {
    CallId: number;
}

export interface ISelectedModel {
    CallIds: number[];
}

export interface INexusRecordingElement {
    call_ID: number;
    call_Name: string;
    call_StartTime: Date;
    tP_TelephoneNumber: string;
    tP_Duration: number;
    tP_Name: string;
    tR_DataSize: string;
    account_Code: string;
    relAddress: string;
  }

  export interface RecordingItem {
    items: INexusRecordingElement[];
    total_count: number;
  }

