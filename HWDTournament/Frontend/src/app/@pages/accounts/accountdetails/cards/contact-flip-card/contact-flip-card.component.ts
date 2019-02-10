import { Component, Input, Output, OnInit, ViewContainerRef, EventEmitter, ViewChild, Inject, NgZone, ElementRef} from '@angular/core';
import {trigger, state, style, animate, transition } from '@angular/animations';
import { Router ,ActivatedRoute} from '@angular/router';
import { IContactInformationVM, PaginatedResult, IAccountSummaryVM, IContactPersonVM,
   ITitleVM, IMaritalStatusVM, ILanguageVM, ISalaryPaymentDateVM ,IContactAddressVM, IPropertyTypeVM, AddressVM} from '../../../../../shared/interfaces/interfaces';
import { AccountDataService } from '../../../../../shared/services/account.data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AgmCoreModule, MapsAPILoader } from '@agm/core';
 import { } from 'googlemaps';

import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { FormControl } from '@angular/forms';
//import { google } from '@agm/core/services/google-maps-types';
//declare var google: any;
 //import { } from '@types/googlemaps';

@Component({
  selector: 'ngx-contact-flip-card',
  styleUrls: ['./contact-flip-card.component.scss'],
  templateUrl: './contact-flip-card.component.html',
  // animations: [
  //   trigger('flipCard', [
  //     state('true', style({
  //       transform: 'rotateY(180deg)'
  //     })),
  //     state('false', style({
  //       transform: 'rotateY(0)'
  //     })),
  //     transition('true => false', animate('800ms ease-out')),
  //     transition('false => true', animate('800ms ease-out'))
  //   ])
  // ]
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})

export class ContactFlipCardComponent implements OnInit {  
    @Input() contactinfo: any; 
    flipped = false;
    apiHost: string;
   // contactinfos: IContactInformationVM[];
    homeaddress: IContactAddressVM;
    postaladdress:IContactAddressVM;
    employeraddress: IContactAddressVM;

    addresses: AddressVM;
    homeaddressStr: string;
    postaladdressStr:string;
    employeraddressStr: string;
    homeaddressloaded: boolean;
    postaladdressloaded:boolean;
    employeraddressloaded: boolean
    contactinformationLoaded: boolean;
    properties : IPropertyTypeVM[];
    propertyloaded: boolean;
  //  contactLoaded: boolean = false;
    index: number = 0;
    backdropOptions = [true, false, 'static'];
    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;

    isProcessing: boolean = false;
    flippedCouplesCount: number = 0;
    animal: string;
    name: string = "taoana";
    constructor(public dialog: MatDialog,
        protected router: Router,private activatedRoute: ActivatedRoute,
        private dataService: AccountDataService,/*private itemsService: ItemsService, 
        private dataService: CompanyDataService,
        private configService: ConfigService*/) 
    { 

    }

    ngOnInit() {
      this.apiHost = "";// this.configService.getApiHost();        
      this.LoadHomeAddresses();
      this.LoadPostalAddresses();
      this.LoadEmployerAddresses();
      this.LoadLookUps();

    }

    LoadLookUps()
    {
        this.dataService.getProperties()
        .subscribe((properties : IPropertyTypeVM[]) => {
            this.properties = properties; 
            console.log('properties:' + JSON.stringify(this.properties));
            
// export class AddressVM {
//   contactaddress: IContactAddressVM;
//   postaladdress: IContactAddressVM;
//   employeraddress: IContactAddressVM;
// }

        this.addresses = {
          homeaddress :this.homeaddress,
          postaladdress:this.postaladdress,
          employeraddress:this.employeraddress
        };
        localStorage.setItem('addresses', JSON.stringify(this.addresses)); 
        this.propertyloaded = true;  
        },
        error => {                
        // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
        });
    }

    LoadHomeAddresses(){
      this.dataService.getContactAddresses(this.contactinfo.per_code,1)
      .subscribe((homeaddress: IContactAddressVM) => {
          this.homeaddress = homeaddress; 
          console.log('home address:' + JSON.stringify(this.homeaddress));
          this.homeaddressStr = this.homeaddress? ((this.homeaddress.adr_line_1 ? (this.homeaddress.adr_line_1 + ' ' ) : '') + 
                              (this.homeaddress.adr_line_2 ? ( this.homeaddress.adr_line_2 + ' ' ) : '' ) + 
                              (this.homeaddress.adr_suburb ? (this.homeaddress.adr_suburb + ' ') : '') + 
                              (this.homeaddress.adr_city_or_Town ? (this.homeaddress.adr_city_or_Town + ' ') : '') +
                              (this.homeaddress.adr_province_or_state ? (this.homeaddress.adr_province_or_state + ' ') : '') +
                              (this.homeaddress.adr_post_code ? (this.homeaddress.adr_post_code) : '')) :''; 
        
          this.homeaddressloaded = true;  
        },
        error => {                
        // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
        });
     }

     LoadPostalAddresses(){
      this.dataService.getContactAddresses(this.contactinfo.per_code,2)
      .subscribe((postaladdress: IContactAddressVM) => {
          this.postaladdress = postaladdress; 
          console.log('postal address:' + JSON.stringify(this.postaladdress));
          this.postaladdressStr = this.postaladdress? ((this.postaladdress.adr_line_1 ? (this.postaladdress.adr_line_1 + ' ' ) : '') + 
                                (this.postaladdress.adr_line_2 ? ( this.postaladdress.adr_line_2 + ' ' ) : '')  + 
                                (this.postaladdress.adr_suburb ? (this.postaladdress.adr_suburb + ' ') : '') + 
                                (this.postaladdress.adr_city_or_Town ? (this.postaladdress.adr_city_or_Town + ' ') : '') +
                                (this.postaladdress.adr_province_or_state ? (this.postaladdress.adr_province_or_state + ' ') : '') +
                                (this.postaladdress.adr_post_code ? (this.postaladdress.adr_post_code) : '')): '';
          this.postaladdressloaded = true;  
        },
        error => {                
        // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
        });
     }
   
     LoadEmployerAddresses(){
      this.dataService.getContactAddresses(this.contactinfo.per_code,3)
      .subscribe((employeraddress: IContactAddressVM) => {
            this.employeraddress = employeraddress; 
            console.log('employeraddress address:' + JSON.stringify(this.employeraddress));
            this.employeraddressStr = this.employeraddress? ((this.employeraddress.adr_line_1 ? (this.employeraddress.adr_line_1 + ' ' ) : '') + 
                              (this.employeraddress.adr_line_2 ? ( this.employeraddress.adr_line_2 + ' ' ) : '')  + 
                              (this.employeraddress.adr_suburb ? (this.employeraddress.adr_suburb + ' ') : '') + 
                              (this.employeraddress.adr_city_or_Town ? (this.employeraddress.adr_city_or_Town + ' ') : '') +
                              (this.employeraddress.adr_province_or_state ? (this.employeraddress.adr_province_or_state + ' ') : '') +
                              (this.employeraddress.adr_post_code ? (this.employeraddress.adr_post_code) : '')) : ''; 
            this.employeraddressloaded = true;  
        },
        error => {                
        // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
        });
     }    

    openContactDetailsDialog(contactinfo: any): void {
        const dialogRef = this.dialog.open(ContactInformationDialog, {
         disableClose: false,
         width: '900px',
        // height:'700px',
        // data: {name: this.name, animal: this.animal}
        data:  contactinfo
       });
   
       dialogRef.afterClosed().subscribe(result => {       
        dialogRef.close();
         //this.animal = result;
       });

       dialogRef.backdropClick().subscribe(_ => {
        // Close the dialog
        dialogRef.close();
      });

     }

     openContactAddressDialog(contactaddress: any): void {
      const dialogRef = this.dialog.open(ContactAddressDialog, {
       disableClose: false,
       width: '900px',
      // height:'700px',
      // data: {name: this.name, animal: this.animal}
      data:  contactaddress
     });
 
     dialogRef.afterClosed().subscribe(result => {       
      dialogRef.close();
       //this.animal = result;
     });

     dialogRef.backdropClick().subscribe(_ => {
      // Close the dialog
      dialogRef.close();
    });

   }
     
     openPersonDetailsDialog(contactinfo: any): void {
       
        const dialogRef = this.dialog.open(PersonDetailsDialog, {
         width: '900px',
        // height:'700px',
        // data: {name: this.name, animal: this.animal}
        data: contactinfo
       });
   
       dialogRef.afterClosed().subscribe(result => {       
        // this.animal = result;
       });

       dialogRef.backdropClick().subscribe(_ => {
        // Close the dialog
        dialogRef.close();
      });
     }
     flip: string = 'inactive';

     toggleFlip(contactinfo: any) {
       this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
       contactinfo.isFlipped = !contactinfo.isFlipped;
     }    
}

//Contact Info Dialog
@Component({
    selector: './contact-information-dialog',
    templateUrl: './contact-information-dialog.html',
    styleUrls: ['./dialog.component.scss'],

  })
  export class ContactInformationDialog {
    contactinfo: IContactInformationVM;
    contactinfoLoaded: boolean = false;
    constructor(
        private toasterService: ToasterService,
      public dialogRef: MatDialogRef<ContactInformationDialog>,
      @Inject(MAT_DIALOG_DATA) public data: IContactInformationVM) {
        this.contactinfo = data ;   
        this.contactinfoLoaded = true;   
      }
  
    updateContact(): void {     
        this.showToast('success', 'Update Success', 'Error occurred while logging in, please try again with valid credentials!');   
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

//Addresses Dialog
import { MatRadioChange } from '@angular/material';
@Component({
  selector: './contact-address-dialog',
  templateUrl: './contact-address-dialog.html',
  styleUrls: ['./dialog.component.scss'],

})
export class ContactAddressDialog {
  contactaddress: IContactAddressVM;
  addressLoaded: boolean = false;

  property : IPropertyTypeVM;
  propertyloaded: boolean;
  public searchField: FormControl;
  
  myevent: EventEmitter<any> = new EventEmitter<any>();
  private viewContainerRef: ViewContainerRef;    
  @ViewChild("search")
  public searchElementRef: ElementRef;

  selectedAddrressType: string;

  addressoptions = [
    'Postal Address',
    'Home Address', 
    'Employer Address', 
  ];
  myaddress:   AddressVM;
  constructor(
    //private mappingService: MappingService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    vcr: ViewContainerRef,
    private dataService: AccountDataService,
    private toasterService: ToasterService,
    public dialogRef: MatDialogRef<ContactInformationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: IContactAddressVM) {
      this.viewContainerRef = vcr;   
      this.contactaddress = data ;   
      
      this.addressLoaded = true;   
    }

    ngOnInit() {

      if (this.contactaddress.adt_id == 1)
      {
        this.selectedAddrressType = 'Home Address';     
      }
      else if (this.contactaddress.adt_id == 2)
      {
        this.selectedAddrressType = 'Postal Address';
      }    
      else if (this.contactaddress.adt_id == 3)
      {
        this.selectedAddrressType = 'Employer Address';
      }

       //load Places Autocomplete
      this.searchField = new FormControl();
      this.mapsAPILoader.load().then(() => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"],componentRestrictions:{country: "za"}
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }     
        
          for (var ac = 0; ac < place.address_components.length; ac++) {
              var component = place.address_components[ac];
              console.log('component--' + JSON.stringify(component));
              switch(component.types[0]) {
                  case 'street_number' :
                     // this.contactdetail.physical_address_line_1 = component.long_name;
                     this.contactaddress.adr_line_1 = component.long_name;
                      break;
                  case 'route':
                     this.contactaddress.adr_line_1 =  this.contactaddress.adr_line_1 + ' '  + component.long_name;
                     // this.contactdetail.physical_address_line_1 = this.contactdetail.physical_address_line_1 + ' '  + component.long_name;
                      break;
                  case 'sublocality_level_1':
                      this.contactaddress.adr_line_2 = component.long_name;
                      //this.contactaddress.adr_suburb = component.long_name;
                      break;
                  case 'locality':
                  this.contactaddress.adr_line_2 =  this.contactaddress.adr_line_2 + component.long_name;
                    //  this.contactdetail.physical_address_line_2  = component.long_name;                   
                    
                    //this.contactaddress.adr_city_or_Town = component.long_name;
                      break;
                  case 'administrative_area_level_2':
                    this.contactaddress.adr_city_or_Town = component.long_name;
                    //  this.contactdetail.physical_address_city  = component.long_name;
                      break;    
                  case 'administrative_area_level_1':
                     this.contactaddress.adr_province_or_state =  component.long_name;
                   //   this.contactdetail.physical_address_province = component.long_name;
                      break;
                  case 'country':
                      this.contactaddress.adr_country = component.long_name;
                     // this.contactdetail.physical_address_country   = component.long_name;                      
                      break;
                  case 'postal_code' :
                    this.contactaddress.adr_post_code = component.long_name;
                    //  this.contactdetail.physical_address_code = component.long_name;
                      break;
              }
          };  
        });
     });
    });
  }
  radioChange($event: MatRadioChange) {
    // this.filter['property'] = event.value;
     console.log('tetetet yteyeyeyueyu');
    console.log($event.source.name, $event.value);
    if ( $event.value === 'Postal Address') {
      // Do whatever you want here
     // alert('Postal Address');
      let addresses = JSON.parse(localStorage.getItem('addresses'));    
      if (addresses != null)     
      {
         this.myaddress= addresses;
         if (this.myaddress != null && this.myaddress.postaladdress != null)
         {
            this.contactaddress = this.myaddress.postaladdress;
         }
         else{
          this.contactaddress.adr_code = 0;
          this.contactaddress.adr_country = '';
          this.contactaddress.adr_city_or_Town = '';
          this.contactaddress.adr_province_or_state = ''
          this.contactaddress.adr_suburb = '';
          this.contactaddress.adr_line_1 = '';
          this.contactaddress.adr_line_2 = '';
          this.contactaddress.pty_id = 0;
          this.contactaddress.per_code = 0;
          this.contactaddress.adt_id = 1;
        }
      }
      else{
        this.contactaddress.adr_code = 0;
        this.contactaddress.adr_country = '';
        this.contactaddress.adr_city_or_Town = '';
        this.contactaddress.adr_province_or_state = ''
        this.contactaddress.adr_suburb = '';
        this.contactaddress.adr_line_1 = '';
        this.contactaddress.adr_line_2 = '';
        this.contactaddress.pty_id = 0;
        this.contactaddress.per_code = 0;
        this.contactaddress.adt_id = 1;
      }
    }
    else if ($event.value === 'Home Address') {
     // alert('Home Address');
      let addresses = JSON.parse(localStorage.getItem('addresses'));    
      if (addresses != null)     
      {
        this.myaddress= addresses;
        if (this.myaddress != null && this.myaddress.homeaddress != null)
        {
            this.contactaddress = this.myaddress.homeaddress;
        }
        else{
          this.contactaddress.adr_code = 0;
          this.contactaddress.adr_country = '';
          this.contactaddress.adr_city_or_Town = '';
          this.contactaddress.adr_province_or_state = ''
          this.contactaddress.adr_suburb = '';
          this.contactaddress.adr_line_1 = '';
          this.contactaddress.adr_line_2 = '';
          this.contactaddress.pty_id = 0;
          this.contactaddress.per_code = 0;
          this.contactaddress.adt_id = 2;
        }
      }
      else{
        this.contactaddress.adr_code = 0;
        this.contactaddress.adr_country = '';
        this.contactaddress.adr_city_or_Town = '';
        this.contactaddress.adr_province_or_state = ''
        this.contactaddress.adr_suburb = '';
        this.contactaddress.adr_line_1 = '';
        this.contactaddress.adr_line_2 = '';
        this.contactaddress.pty_id = 0;
        this.contactaddress.per_code = 0;
        this.contactaddress.adt_id = 2;
      }
    }
    else if ($event.value === 'Employer Address')
    {
     // alert('Employer Address');
      let addresses = JSON.parse(localStorage.getItem('addresses'));    
      if (addresses != null)     
      {
        this.myaddress= addresses;
        if (this.myaddress != null && this.myaddress.employeraddress != null)
        {
            this.contactaddress = this.myaddress.employeraddress;
        }
        else{
          this.contactaddress.adr_code = 0;
          this.contactaddress.adr_country = '';
          this.contactaddress.adr_city_or_Town = '';
          this.contactaddress.adr_province_or_state = ''
          this.contactaddress.adr_suburb = '';
          this.contactaddress.adr_line_1 = '';
          this.contactaddress.adr_line_2 = '';
          this.contactaddress.pty_id = 0;
          this.contactaddress.per_code = 0;
          this.contactaddress.adt_id = 3;
        }
      }
      else{
        this.contactaddress.adr_code = 0;
        this.contactaddress.adr_country = '';
        this.contactaddress.adr_city_or_Town = '';
        this.contactaddress.adr_province_or_state = ''
        this.contactaddress.adr_suburb = '';
        this.contactaddress.adr_line_1 = '';
        this.contactaddress.adr_line_2 = '';
        this.contactaddress.pty_id = 0;
        this.contactaddress.per_code = 0;
        this.contactaddress.adt_id = 3;
      }
    }
} 

  updateContactAddress(): void {     
      this.showToast('success', 'Update Success', 'Error occurred while logging in, please try again with valid credentials!');   
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

// Person Details Dialog
@Component({
    selector: './person-details-dialog',
    templateUrl: './person-detail-dialog.html',
    styleUrls: ['./dialog.component.scss'],
  })
  export class PersonDetailsDialog {
        contactperson : IContactPersonVM;
        contactpersonLoaded: boolean;
        maritalstattusloaded: boolean = false;
        languageloaded: boolean = false;
        titleloaded: boolean = false;
        salarypaymentsloaded: boolean = false;
        titles: ITitleVM;
        maritalstatuses: IMaritalStatusVM;
        languages: ILanguageVM;
        contactinfo: IContactInformationVM;
        salarypaymentdates: ISalaryPaymentDateVM;
        minDate = new Date(1970,0,1);
        maxDate = new Date();

        constructor(
            private toasterService: ToasterService,
            private dataService: AccountDataService,
            public dialogRef: MatDialogRef<PersonDetailsDialog>,
            @Inject(MAT_DIALOG_DATA) public data: IContactInformationVM ) 
    {      
        this.contactinfo = data ;    
        this.LoadContacts(this.contactinfo.per_code );
    }
      
    LoadContacts(per_code : number)
    {       

          this.dataService.getTitles()
          .subscribe((titles: ITitleVM) => {
              this.titles = titles; 
              this.titleloaded = true;  
          },
          error => {                
          // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
          });
          //  }
          this.dataService.getMaritalStatuses()
          .subscribe((maritalstatuses: IMaritalStatusVM) => {
              this.maritalstatuses = maritalstatuses; 
              this.maritalstattusloaded = true;  
          },
          error => {                
          // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
          });

          this.dataService.getLanguages()
          .subscribe((languages: ILanguageVM) => {
              this.languages = languages; 
              this.languageloaded = true;  
          },
          error => {                
          // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
          });

          this.dataService.getSalaryPaymentDates()
          .subscribe((salarypaymentdates: ISalaryPaymentDateVM) => {
              this.salarypaymentdates = salarypaymentdates; 
              this.salarypaymentsloaded = true;  
          },
          error => {                
          // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
          }); 

          this.dataService.getContactPerson(per_code)
          .subscribe((contactperson: IContactPersonVM) => {
              this.contactperson = contactperson; 
              this.contactpersonLoaded = true;  
          },
          error => {                
          // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
          });
    }
  
    updatePerson(): void {
        this.showToast('success', 'Update Success', 'Error occurred while logging in, please try again with valid credentials!');  
     // this.dialogRef.close();
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
  
