import { Injectable } from '@angular/core';

@Injectable()
export class StateService {
    userState: UserState = { userName: 'Taona', isAuthenticated: true };

    constructor() { }

    /**
     * setAuthentication
     */
    public setAuthentication(state: UserState) {
        this.userState = state;
    }

    public isAuthenticated() {
        return this.userState.isAuthenticated;
    }
}

export interface UserState {
    userName: string;
    isAuthenticated: boolean;
}