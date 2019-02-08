export interface IUser {
    id: number;
    username: string;
    company_detail_id: number;
    b2btype_id: number;
    usr_code: number;
    password: string;
    confirmpassword: string;
    salt: string;
    rememberme: boolean;
    isactive: boolean;
    date_created: Date;
    date_updated: Date;
}

export interface LoginVM {
    userName: string;
    password: string;
}

export interface RegisterVM {
    id: string;
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    startFreeTrial: boolean;
    isAdmin: Boolean;
}

export interface AppUser {
    id: string;
    userName: string;
    email: string;
    isAdmin: Boolean;
 }

export interface AuthDetails {
   token: string;
   username: string;
   roles: string[];
}

export interface ResultVM {
    status: StatusEnum;
    message: string;
    token: string;
    roles: string[];
    username: string;
    data: { };
}

export enum StatusEnum {
    Success = 1,
    Error = 2
}

export interface IForgotPasswordVM {
    id: string;
    email: string;
}

export interface IPasswordResetVM {
    id: string;
    email: string;
    password: string;
    confirmPassword: string;
    resetToken: string;
}

export interface IUserRecaptcha {
    id: number;
    usr_code: number;
    username: string;
    company_detail_id: number;
    password: string;
    confirmpassword: string;
    rememberme: boolean;
    isactive: boolean;
    captcha: boolean;
}

export interface IRoleMenu {
   role_id: number;
   menu_id: number;
   loggedin: boolean;
   date_created: Date;
}

export class User {
    Username: string;
    Password: string;
    RememberMe: boolean;

    constructor(username: string,
        password: string) {
        this.Username = username;
        this.Password = password;
        this.RememberMe = false;
    }
}

export interface Pagination {
    CurrentPage: number;
    ItemsPerPage: number;
    TotalItems: number;
    TotalPages: number;
}

export class PaginatedResult<T> {
    result: T;
    pagination: Pagination;
}

export interface Predicate<T> {
   // (item: T): boolean
   Predicate<T> (item: T): boolean;
}
