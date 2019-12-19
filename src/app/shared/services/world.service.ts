import { World } from '../models/world';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorldService {

  static URL = 'http://localhost:3000/worlds';

  world: World;

  constructor(private http: HttpClient) {}

  public getAll(): Observable<World[]> {
    return this.http
      .get(WorldService.URL)
      .pipe(map(this.convertDateFromServerToWorlds));
  }

  private convertDateFromServerToWorlds( worlds: any[]): World[] {
    return  worlds.map(world => new World(world));
  }

  public getById(id: number): Observable<World> {
    return this.http
      .get(WorldService.URL + '/' + id)
      .pipe(map(( world: World) => new World(world)));
  }

  public create(world: World): Observable<any> {
    return this.http.post(WorldService.URL, world);
  }

  public update(world: World): Observable<any> {
    return this.http.put(WorldService.URL + '/' + world.id, world);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(WorldService.URL + '/' + id);
  }
}
