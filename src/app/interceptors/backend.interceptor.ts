import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConsentItem } from '../types/types';
import { consentsMock } from './../../mocks/consentsMock';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method === 'GET' && request.url === 'http://localhost:4200/consents') {
      return of(new HttpResponse({ status: 200, body: consentsMock }));
    }

    if (request.method === 'POST' && request.url === 'http://localhost:4200/consents') {
      consentsMock.push(request.body as ConsentItem);
      return of(new HttpResponse({ status: 200, body: consentsMock }));
    }

    next.handle(request);
  }
}