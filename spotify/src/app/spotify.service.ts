import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCqDLgl-_wQFpKL5ImpPCV6f-5WnCk3h2RRxkxteWEKt5u2UxRGNaXCMAvsWvgvCCxrdqCr_45ZzyJHZM_bEowyCtaA2zAID3v-7aGJjCqq83AgB5eYCgG7X31dPtRP6PzOase23secs5zcXTh29ZqRIEIUpWsuFHpa4HKVmVkgBYcuGWk-GQckQt5i5gCS7R56mkWus71EwgKgQjY'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}

