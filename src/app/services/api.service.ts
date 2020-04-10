import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsentItem } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getConsentsList(): Observable<ConsentItem[]> {
    return this.httpClient.get<ConsentItem[]>('http://localhost:4200/consents');
  }

  postConsent(item: ConsentItem) {
    return this.httpClient.post('http://localhost:4200/consents', item);
  }
}
