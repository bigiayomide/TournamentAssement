
export interface IAuthDetails {
    token: string;
    username: string;
    roles: string[];
}

export interface IResultVM {
    status: StatusEnum;
    message: string;
    token: string;
    roles: string[];
    username: string;
    data: {};
}

export enum StatusEnum {
    Success = 1,
    Error = 2
}

export interface ILoginVM {
    userName: string;
    password: string;
}

//tr_usr_user
export interface IUser {
    id: number;
    usr_user_name: string;//email
    usr_code: number;
    usr_surname: string;
    usr_first_name: string;
    usr_password: string;
    usr_confirmpassword: string;

    usr_active: boolean;
    date_created: Date;
    date_updated: Date;
}

export interface RegisterVM {
    usr_user_name: string;
    usr_surname: string;
    usr_first_name: string;
    usr_password: string;
    usr_confirm_password: string;
}


export interface ITournament {
    Id?: number;
    tournament_name: string;
    // Events: Array<Event>
}

export interface IDialogMessage{
    message?:string;
    data?:any;
    valid:boolean;
}
export interface IEvent {
    Id: number;
    tournament_id: number;
    event_name: string;
    event_number: number;
    event_date_time: Date;
    event_end_date_time: Date;
    auto_close: boolean;
    //  event_details :Array<EventDetail>
}

export interface IEventDetail{
    Id :number
    event_id :number;
    event_status_id :number;
    event_detail_name :string;
    event_detail_number :number;
    event_detail_odd :number;
    finishing_position :number;
    first_timer :boolean
}

export interface IEventDetailStatus{

     Id :number;

     event_detail_status_name :string
    //  eventdetails :Array<IEventDetail>
}
export interface IRegisterVM {
    id: string;
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    isAdmin: Boolean;
}
export interface usergroupVM {
    grp_id: number;
    usr_code: number;
    grp_description: string;
}

export interface groupFunctionsVM {
    sfu_id: number;
    sfg_deny: boolean;
    grp_id: number;
    sfu_description: string;
}

export interface UserVM {
    usr_code: number;
    usr_user_name: string;
    usr_first_name: string;
    usr_surname: string;
    usr_active: boolean;
}

export interface LoginResponseVM {
    userVM: UserVM,
    token: string,
    usergroupvm: usergroupVM[],
    groupFunctionvm: groupFunctionsVM
}

export interface IForgotPasswordVM {
    id: number;
    user_id: number;
    usr_code: number;
    username: string;
    usr_activated: boolean;
    date_created: Date;
    date_updated?: Date;
    validationsalt: string;
}

export interface IUserRecaptcha {
    id: number;
    usr_code: number;
    username: string;
    usr_password: string;
    usr_confirmpassword: string;
    rememberme: boolean;
    usr_active: boolean;
    captcha: boolean;
}

export interface IRoleMenu {
    role_id: number;
    menu_id: number;
    loggedin: boolean;
    date_created: Date;
}

export interface IAccountSearchVM {
    searchquery: string;
    criteria: number;
    // acc_account_code :string;
    // ped_id_number: string;
    // pho_phone_number:string;
    currentpage: number;
    itemsperpage: number;
}

export interface IAccountDetailVM {
    acc_code: number;
    acc_account_code_old: number;
    acc_store_name: string;
    acc_store_number: string;
    acy_description: string;
    crs_description: string;
    agn_description: string;
    cmp_name: string;
    acc_payment_reference: string;
}

export interface IAccountSummaryVM {
        acc_code: number;
    acc_account_code: string;
    fullname: string;
    bck_id: number;
    bck_description: string;
    pho_phone_number: string;
    ped_id_number: string;
}

export interface IPropertyTypeVM {
    pty_id: number;
    pty_description: string;
    pty_active: boolean;
}

export interface IContactAddressVM {
    per_code: number;
    adr_code: number;
    adr_line_1: string;
    adr_line_2: string;
    adr_suburb: string;
    adr_city_or_Town: string;
    adr_province_or_state: string;
    adr_country: string;
    adr_post_code: string;
    adt_id: number;
    pty_id: number;
}

export class AddressVM {
    homeaddress: IContactAddressVM;
    postaladdress: IContactAddressVM;
    employeraddress: IContactAddressVM;
}

export interface IContactInformationVM {
    acc_code: number;
    per_code: number;
    ret_id: number;
    ret_description: string;
    fullname: string;
    cell_number: string;
    home_phone_number: string;
    work_phone_number: string;
    email_personal_address: string;
    email_work_address: string;
    postal_address: string;
    postal_code_postal: string;
    home_address: string;
    postal_code_home: string;
    employer_address: string;
    postal_code_employer: string;
    ped_current: string;
    acc_status: number;
    id_number: string,
    date_of_birth: Date,
    lng_Description: string,
    marital_status: string,
    employer: string,
    occupation: string,
    department: string,
    date_employed: string,
    supervisor: string,
    employee_code: string,
    salary_amount: number,
    salary_paydate: string,
    isFlipped: boolean;
    cell_number_status: number;
    home_phone_number_status: number;
    work_phone_number_status: number;
    postal_address_status: number;
    employer_address_status: number;
    home_address_status: number;

}
export interface IContactPersonVM {
    ptl_id: number;
    ped_name_1: string;
    ped_surname: string;
    ped_id_number: string;
    ped_date_of_birth: Date;
    lng_id: number;
    mts_id: number;
    ped_employer: string;
    ped_occupation: string;
    ped_department: string;
    ped_date_employed: Date;
    ped_supervisor: string;
    ped_clock_number: string;
    ped_salary: string;
    spm_description: string;
}

export interface IAccountGeneralInformationVM {
    acc_code: number;
    acc_account_code: string;
    acc_outstanding_balance: number;
    acc_age: number;
    acc_score: boolean;
    acc_profile: number;
    acc_recency: number;
    acc_mos: number;
    acc_status: number;
    acc_memo_interest_amount: number;
    acc_payment_frequency: string;
}

export interface IAccountFinancialBalanceVM {
    acc_code: number;
    acc_charge_off_amount: number;
    acc_outstanding_balance: number;
    acc_installment: number;
    acc_arrears_amount: number;
    acc_total_due: number;
    acc_last_payment_amount: number;
    acc_settlement_amount: number;
}
export interface IAccountFinancialDatesVM {
    acc_code: number;
    acc_date_charge_off: Date;
    acc_date_taken_on: Date;
    acc_date_account_opened: Date;
    acc_date_taken_on_effective: Date;
    acc_date_write_off: Date;
    acc_date_closed: Date;
    acc_date_paid_prior: Date;
}

export interface ITitleVM {
    ptl_id: number;
    ptl_description: string;
}

export interface IMaritalStatusVM {
    mts_id: number;
    mts_description: string;
}

export interface ILanguageVM {
    lng_id: number;
    lng_Description: string;
}


export interface ISalaryPaymentDateVM {
    spm_id: number;
    spm_description: string;
}


export interface IScriptVM {
    scr_id: number;
    scr_description: string;
    scr_text: string;
}
// tittles: ;
// maritalstatuses: ;
// languages: 
export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
}

export class PaginatedResult<T> {
    items: T;
    pagination: Pagination;
}

export interface Predicate<T> {
    // (item: T): boolean
    Predicate<T>(item: T): boolean;
}

