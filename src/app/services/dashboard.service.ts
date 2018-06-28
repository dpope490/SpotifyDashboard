import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Artist} from '../artist';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private searchURL: string;

  constructor(private http:HttpClient) { }

  searchMusic(str: string, type='artist'): Observable<Artist[]> {
    this.searchURL = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
    return this.http.get<Artist[]>(this.searchURL);
  }
}
