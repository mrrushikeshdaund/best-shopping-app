import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Automatically makes the service injectable
})
export class DataService {
  private userDataUrl = 'http://localhost:3000/api/products'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  fetchUsersData(): Observable<any> {
    return this.http.get(this.userDataUrl);
  }
}
