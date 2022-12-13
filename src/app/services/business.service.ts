import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private baseUrl: string = "https://638ceccfd2fc4a058a639d02.mockapi.io/api/v1";

  constructor(private http: HttpClient) {}

  public getAllBusiness() {
    return this.http.get(this.baseUrl + '/business');
  }
}
