import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ObjectType } from '../models/object-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectTypeService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:49419/api/object-types';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public getObjectTypes(): Observable<ObjectType[]> {
    return this.http.get<ObjectType[]>(this.accessPointUrl, { headers: this.headers });
  }
}
