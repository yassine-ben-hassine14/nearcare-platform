import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // API base URL. make sure port 8081 matches backend
  private apiUrl = 'http://localhost:8081/api';

  sendContact(data: any) {
    return this.http.post(`${this.apiUrl}/contact`, data);
  }

  sendRecommendation(data: any) {
    return this.http.post(`${this.apiUrl}/recommendation`, data);
  }

  getContacts() {
    return this.http.get<any[]>(`${this.apiUrl}/contact`);
  }

  getRecommendations() {
    return this.http.get<any[]>(`${this.apiUrl}/recommendation`);
  }
}
