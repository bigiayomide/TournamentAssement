import { Observable } from 'rxjs';
import { MOCK_USERS, MOCK_POSTS, MOCK_IMAGES, MOCK_PRODUCTS } from './data';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class DataService {

    constructor() { }

    getUsers(): Observable<any> {
        return Observable.from(MOCK_USERS);
    }

    getUsersSync(id?: number) {
        if (id === undefined) {
            return MOCK_USERS;
        } else {
            return _.find(MOCK_USERS, u => u.id === id);
        }
    }

    getPosts(size?: number): Observable<any> {
        return null;
       // return Observable.from(MOCK_POSTS).take(4).toArray();
    }

    getPostsSync(id?: number) {
        if (id === undefined) {
            return MOCK_POSTS;
        } else {
            return _.find(MOCK_POSTS, p => p.id === id);
        }
    }

    getUserPosts(userId: number, delay: number = 0): Observable<any> {
        return null;
       // return Observable.of(_.filter(MOCK_POSTS, p => p.userId === userId)).delay(delay);
    }

    // returns an observable of an array
    getAllPosts() {
        return Observable.of(MOCK_POSTS);
    }

    wsOnUser(delay, size?: number): Observable<any> {
        return Observable
            .interval(delay).take(size === undefined ? MOCK_USERS.length : size)
            .map(i => MOCK_USERS[i]);
    }

    getImagesSync() {
        return MOCK_IMAGES;
    }

    getProducts() {
        return Observable.from(MOCK_PRODUCTS);
    }
}
