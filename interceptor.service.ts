import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class HttpClient {

  constructor(private http: Http) {}
  
  createAuthorizationHeader(headers: Headers) {
    var clientCred: string = btoa( "testjwtclientid"+ ':' + "XY7kmzoNzl100");
    headers.append('Authorization', 'Basic ' +
      btoa(clientCred));
      headers.append('Content-Type','application/x-www-form-urlencoded;charset=utf-w8'); 
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
}