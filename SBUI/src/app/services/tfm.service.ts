import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tfm } from '../models/tfm';

@Injectable({
  providedIn: 'root'
})
export class TfmService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:49419/api/tfms';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public getTfms(): Observable<Tfm[]> {
    return this.http.get<Tfm[]>(this.accessPointUrl, { headers: this.headers });
  }
}
