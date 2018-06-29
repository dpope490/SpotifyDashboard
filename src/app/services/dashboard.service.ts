import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  token = 'BQDNPosLqs3FfAo5EYeAgdWPoVeTKKtrTBa9atGvR6gHhTwAu16_WnCpb514sTXwTIz7M4I8fXtsMaIlvC2H0y_GUoGl43-XpQfQA-a7dhO0uR1mQmUKTMaBV-dsDclpgohhPE1s';

  private searchURL: string;

  constructor(private http:HttpClient) { }

  spotifyQuery(query: String) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${this.token}`
    });
    return this.http.get(url, {headers});
  }

  searchMusic(str: string, type='artist') {
    return this.spotifyQuery(`search?q=${str}&type=${type}&limit=15`)
      .pipe(map(data => data['artists'].items));
  }
}
