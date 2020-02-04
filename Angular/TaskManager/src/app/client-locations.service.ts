import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientLocation } from './client-location';

@Injectable({
  providedIn: 'root'
})
export class ClientLocationsService {

  constructor(private httpClient: HttpClient  ) 
  { 
  }

  getClientLocation(): Observable<ClientLocation[]>
  {
    return this.httpClient.get<ClientLocation[]>("/api/clientlocations", { responseType: "json" });
  }
}
