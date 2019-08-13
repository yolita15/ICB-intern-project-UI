import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Object, IObject } from '../models/object';
import { Department } from '../models/department';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:49419/api/objects';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public getObjectsForCompany(id: string): Observable<IObject[]> {
    const url = `${this.accessPointUrl}/company/${id}`;
    return this.http.get<IObject[]>(url, { headers: this.headers });
  }

  public getObject(id: string): Observable<Object> {
    const url = `${this.accessPointUrl}/${id}`;
    return this.http.get<Object>(url, { headers: this.headers });
  }

  public updateObject(obj: Object, applyForChildren: string): Observable<Object> {
    const url = `${this.accessPointUrl}/${obj.id}`;
    return this.http.put<Object>(url, obj, { headers: this.headers, params: { 'apply' : applyForChildren } });
  }
}
