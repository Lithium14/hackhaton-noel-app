import { Score } from '../models/score';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  static URL = 'http://localhost:3000/scores';

  score: Score;

constructor(private http: HttpClient) { }

public getAll(): Observable<Score[]> {
  return this.http
    .get(ScoreService.URL)
    .pipe(map(this.convertDateFromServerToScores));
}

private convertDateFromServerToScores(scores: any[]): Score[] {
  return scores.map(score => new Score((score)));
}

public getById(id: number): Observable<Score> {
  return this.http
    .get(ScoreService.URL + '/' + id)
    .pipe(map((score: Score) => new Score(score)));
}

public create(score: Score): Observable<any> {
  return this.http.post(ScoreService.URL, score);
}

public update(score: Score): Observable<any> {
  return this.http.put(ScoreService.URL + '/' + score.id, score);
}

public delete(id: number): Observable<any> {
  return this.http.delete(ScoreService.URL + '/' + id);
}
}
