import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ComicModel} from "../../models/comic.model";
import {ResponseModel} from "../../models/response.model";

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  readonly BASE_API_URL = 'https://gateway.marvel.com/v1';
  readonly API_KEY = '580c1e448d2a61489c897bf102acf122'

  constructor(private http: HttpClient) {
  }

  public getComics(): Observable<ResponseModel<ComicModel>> {
    return this.http.get<ResponseModel<ComicModel>>(`${this.BASE_API_URL}/public/comics?orderBy=modified&apikey=${this.API_KEY}`)
  }
}

