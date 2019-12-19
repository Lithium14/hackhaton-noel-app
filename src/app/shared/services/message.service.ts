
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  static URL = 'http://localhost:3000/messages';

  message: Message;

constructor(private http: HttpClient) { }
public getAll(): Observable<Message[]> {
  return this.http
    .get(MessageService.URL)
    .pipe(map(this.convertDateFromServerToMessages));
}

private convertDateFromServerToMessages(messages: any[]): Message[] {
  return messages.map(message => new Message((message)));
}

public getById(id: number): Observable<Message> {
  return this.http
    .get(MessageService.URL + '/' + id)
    .pipe(map((message: Message) => new Message(message)));
}

public create(message: Message): Observable<any> {
  return this.http.post(MessageService.URL, message);
}

public update(message: Message): Observable<any> {
  return this.http.put(MessageService.URL + '/' + message.id, message);
}

public delete(id: number): Observable<any> {
  return this.http.delete(MessageService.URL + '/' + id);
}
}
