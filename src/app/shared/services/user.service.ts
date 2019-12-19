import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static URL = 'http://localhost:3000/users';

  user: User;
  constructor(private http: HttpClient) {}

  public getAll(): Observable<User[]> {
    return this.http
      .get(UserService.URL)
      .pipe(map(this.convertDateFromServerToUsers));
  }

  private convertDateFromServerToUsers(users: any[]): User[] {
    return users.map(user => new User(user));
  }

  public getById(id: number): Observable<User> {
    return this.http
      .get(UserService.URL + '/' + id)
      .pipe(map((user: User) => new User(user)));
  }

  public create(user: User): Observable<any> {
    return this.http.post(UserService.URL, user);
  }

  public update(user: User): Observable<any> {
    return this.http.put(UserService.URL + '/' + user.id, user);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(UserService.URL + '/' + id);
  }
}
