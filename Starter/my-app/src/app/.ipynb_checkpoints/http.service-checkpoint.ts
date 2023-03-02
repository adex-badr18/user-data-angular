import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }
    
    getUsers(): Observable<[]> {
        this.httpClient.get<[]>('https://jsonplaceholder.typicode.com/users');
    }
}
