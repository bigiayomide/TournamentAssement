import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CampaignFilterService } from '../../callrecording.services/campaignfilter.service';
import { AccountStatusFilterService } from '../../callrecording.services/accountstatusfilter.service';
import { MatSelectChange, MatProgressSpinner } from '@angular/material';
import { NgForm } from '@angular/forms';
import { ISearchModel, ISearchViewModel, ISearchResult } from '../../callrecording.models';
import { RecordingSearchService } from '../../callrecording.services/recordingsearch.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Data } from '../../callrecording.providers/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  minDate = new Date(1970, 0, 1);
  ToMinDate;
  maxDate = new Date;
  isAdminUser = false;
 // selectedDatabase;
 // selectedBusinessUnit;
 // selectedEmpCode;
 // selectedAgentGroup;
 // selectedClass;
 // selectedComment;
//  selectedBook;
  spinnerOn = false;
//   EmpCode;
//   AccountNo;
//   AccountNoOld;
//   CustomerFirstName;
//   SecondName;
//   phoneNumber;
//   CustomerId;
//   EmailAddress;
  public searchview: ISearchViewModel = {
    businessUnit: '',
    database: '',
    classHash: '',
    comment: '',
    book: '',
    agentGroup: 0,
    empCode: '',
    accountNo: '',
    accountNoOld: '',
    customerFirstName: '',
    secondName: '',
    phoneNumber: '',
    customerId: '',
    emailAddress: '',
    dateFrom: new Date(),
    dateTo: new Date(),
  };

  private databases: ISearchModel[] = [];
  filteredDatabases: ISearchModel[] = this.databases;
  private books: ISearchModel[] = [];
  filteredBooks: ISearchModel[] = this.books;
  public agentGroups: ISearchModel[] = [];
  businessUnits: ISearchModel [] = [];
  private classes: ISearchModel[] = [];
  filteredClasses: ISearchModel[] = this.classes;
  private comments: ISearchModel[] = [];
  filteredComments: ISearchModel[] = this.comments;
  private employeeCodes: ISearchModel[] = [];
  filteredemployeeCodes: ISearchModel[] = this.employeeCodes;

  constructor(
      private campaignFilterService: CampaignFilterService,
      private accountStatusFilterService: AccountStatusFilterService,
      private recordingSearchService: RecordingSearchService,
      private router: Router,
      private route: ActivatedRoute,
      private data: Data
  ) {  }

  ngOnInit() {
    const auth = JSON.parse(localStorage.getItem('auth'));
    if (auth == null) {
      // alert('test not logged');
      this.router.navigate(['./logins']);
    } else {
        this.isAdminUser = auth.roles.includes('Admin');
        console.log( this.isAdminUser);
        this.loadBusinessUnits();
        this.loadAgentGroups();
        if (this.data.storage != null) {
          this.loadSearchCriteria();
        }
    }
  }

  ngAfterViewInit() {

  }

  loadSearchCriteria() {
    // bind the search model to the search form.
  }

  loadBusinessUnits() {
      this.campaignFilterService.getBusinessUnits().subscribe((businessUnits: ISearchModel[]) => {
          this.businessUnits = businessUnits;
          console.log(businessUnits);
      }, error => {
          console.log('error loading business units from the database ' + error);
      });
  }

 loadDatabases(businessUnit: string) {
    this.campaignFilterService.getDatabases(+businessUnit).subscribe((databases: ISearchModel[]) => {
      this.filteredDatabases = databases;
      return this.databases = databases;
    }, error => {
        console.log('error loading databases from the database ' + error);
    });
 }

 loadBooks(database: string) {
    this.campaignFilterService.getBooks(database) .subscribe((books: ISearchModel[]) => {
      this.filteredBooks = books;
      return this.books = books;
    }, error => {
        console.log('error loading books from the database ' + error);
    });
 }

 loadClasses(bckDescriptionHash: string, serverDbVarbinary: string) {
    this.accountStatusFilterService.getClasses(bckDescriptionHash, serverDbVarbinary).subscribe((classes: ISearchModel[]) => {
        this.filteredClasses = classes;
        return this.classes = classes;
    }, error => {
        console.log('error loading classes from the database ' + error);
    });
 }

 filterListclasses(query: string) {
    const listname = 'classes';
    const result = this.filterGeneric(query, listname);
    this.filteredClasses = result;
 }

 filterComments(query: string) {
    const listname = 'comments';
    const result = this.filterGeneric(query, listname);
    this.filteredComments = result;
 }

 filterEmployeeCodes(query: string) {
    const listname = 'employeeCodes';
    const result = this.filterGeneric(query, listname);
    this.filteredemployeeCodes = result;
 }

 filterBooks(query: string) {
  const listname = 'books';
  const result = this.filterGeneric(query, listname);
  this.filteredBooks = result;
 }

 filterdatabases(query: string) {
    const listname = 'databases';
    const result = this.filterGeneric(query, listname);
    this.filteredDatabases = result;
 }

 loadComments(bckDescriptionHash: string, serverDbVarbinary: string) {
    this.accountStatusFilterService.getComments(bckDescriptionHash, serverDbVarbinary).subscribe((comments: ISearchModel[]) => {
      this.filteredComments = comments;
      return this.comments = comments;
    }, error => {
        console.log('error loading comments from the database ' + error);
    });
 }

 loadAgentGroups() {
    this.campaignFilterService.getAgentGroups().subscribe((agentGroups: ISearchModel[]) => {
      return this.agentGroups = agentGroups;
    }, error => {
        console.log('error loading agent groups from the database ' + error);
    });
 }

 loadEmployeeCodes(bckDescriptionHash: string, serverDbVarbinary: string, agentGroup: number) {
    this.campaignFilterService.getEmployeeCodes(bckDescriptionHash, serverDbVarbinary, agentGroup)
    .subscribe((employeeCodes: ISearchModel[]) => {
      this.filteredemployeeCodes = employeeCodes;
      return this.employeeCodes = employeeCodes;
    }, error => {
        console.log('error loading employee codes from the database ' + error);
    });
 }

 filterGeneric(query: string, listname: string): ISearchModel[] {
  const result: ISearchModel[] = [];
  switch (listname) {
    case('classes'):
      for (const item of this.classes) {
        if (item.name.toLowerCase().indexOf(query.toLowerCase()) > -1) {
          result.push(item);
        }
      }
      return result;

    case('employeeCodes'):
    for (const item of this.employeeCodes) {
      if (item.name.toLowerCase().indexOf(query.toLowerCase()) > -1) {
        result.push(item);
      }
    }
    return result;

    case('databases'):
    for (const item of this.databases) {
      if (item.name.toLowerCase().indexOf(query.toLowerCase()) > -1) {
        result.push(item);
      }
    }
    return result;

    case('books'):
    for (const item of this.books) {
      if (item.name.toLowerCase().indexOf(query.toLowerCase()) > -1) {
        result.push(item);
      }
    }
    return result;

    case('comments'):
    for (const item of this.comments) {
      if (item.name.toLowerCase().indexOf(query.toLowerCase()) > -1) {
        result.push(item);
      }
    }
    return result;
  }
 }

  onSelectedBusinessUnitChange(event: MatSelectChange) {
      // this.selectedDatabase = null;
      this.loadDatabases(event.value);
  }

  onSelectedDatabaseChange(event: MatSelectChange) {
     // this.selectedBook = null;
      this.loadBooks(event.value);
  }

  onSelectedBookChange(event: MatSelectChange) {
    //  this.selectedClass = null;
    //  this.selectedComment = null;
      this.loadClasses(event.value, this.searchview.database);
      this.loadComments(event.value, this.searchview.database);
      this.loadEmployeeCodes(event.value, this.searchview.database, -1);
  }

  onSelectedAgentChange(event: MatSelectChange) {
     this.loadEmployeeCodes(this.searchview.book, this.searchview.database/*this.selectedBook, this.selectedDatabase*/,  event.value);
  }

  OnFromDateChanged(event: any) {
      this.ToMinDate = event.value;
  }

  onSearchSubmit(form: NgForm) {
    const model: ISearchViewModel = {
        businessUnit: this.searchview.businessUnit,
        database: this.searchview.database,
        classHash: this.searchview.classHash,
        comment: this.searchview.comment,
        book: this.searchview.book,
        agentGroup: this.searchview.agentGroup,
        empCode: this.searchview.empCode,
        accountNo: this.searchview.accountNo,
        accountNoOld: this.searchview.accountNoOld,
        customerFirstName: this.searchview.customerFirstName,
        secondName: this.searchview.secondName,
        phoneNumber: this.searchview.phoneNumber,
        customerId: this.searchview.customerId,
        emailAddress: this.searchview.emailAddress,
        dateFrom: new Date(new Date(this.searchview.dateFrom).getFullYear(), new Date(this.searchview.dateFrom).getMonth(), new Date(this.searchview.dateFrom).getDate() + 1),
        dateTo: new Date(new Date(this.searchview.dateTo).getFullYear(), new Date(this.searchview.dateTo).getMonth(), new Date(this.searchview.dateTo).getDate() + 1),
    };

    this.spinnerOn = true;
    this.SearchRecordings(model);
  }

  SearchRecordings(model: ISearchViewModel): any {
    this.data.storage = model;
    this.router.navigate(['../searchresults'], {relativeTo: this.route, });
  }
}
