import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Use the new 'inject' function (Modern Angular)
  private http = inject(HttpClient);

  // If you are using port 8081, change these URLs!
  private apiUrl = 'http://localhost:8081/api';

  constructor() { }

  // Function to send Contact Form
  sendContact(data: any) {
    return this.http.post(`${this.apiUrl}/contact`, data);
  }

  // Function to send Recommendation Form
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