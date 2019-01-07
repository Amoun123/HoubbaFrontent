import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Marsupilamis  } from './interfaces/marsupilamis';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private URLajout: string;
  result: any;
  URL = 'http://localhost:5000/api/v1/marsupilamis';
  constructor(private http: Http) { }
  getAll(): Observable<any> {
    return this.http.get(this.URL)
      .map((res) => res.json());
  }
  get(id: string) {
    return this.http.get(this.URL + '/' + id)
      .map(res => res.json());
  }

  add(mars: Marsupilamis): Observable<any> {
    return this.http.post(this.URL, mars);
  }
  update(mars: Marsupilamis): Observable<any>  {
    return this.http.put(this.URL + '/' + mars._id, mars);
  }

  delete(id: String): Observable<any> {
    return this.http.delete(this.URL + '/' + id);
  }
  login( username: String, pass: String  ) {
    this.URLajout = 'http://localhost:5000/api/v1/logins/'
      + username + '/' + pass;
    console.log(this.URLajout);
    return this.http.get(this.URLajout)
      .map(res => res.json());
  }


}





