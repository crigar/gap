import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getPersons(name: string) {
    return this.http.get<any>('https://restcountries.com/v2/name/'+ name);
  }
}
