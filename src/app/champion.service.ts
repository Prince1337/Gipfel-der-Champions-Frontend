import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Champion } from './champion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChampionService {
  private apiUrl = 'https://f1-champions-7e833d2b5c10.herokuapp.com/v1';

  constructor(private http: HttpClient) {}


  getChampions(): Observable<Champion[]> {
    return this.http.get<Champion[]>(this.apiUrl);
  }

  getChampionBySeason(season: number): Observable<Champion | undefined> {
    return this.http.get<Champion>(`${this.apiUrl}/season/${season}`);
  }
}