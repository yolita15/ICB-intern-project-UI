import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserType } from '../models/user-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:49419/api/user-types';
  
  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public getAllUserTypes(): Observable<UserType[]> {
    return this.http.get<UserType[]>(this.accessPointUrl, { headers: this.headers });
  }
}
