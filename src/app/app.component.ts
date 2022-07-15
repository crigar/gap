import { Component } from '@angular/core';
import { PersonService } from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  value: string = ''
  data = [{id: 1, name: 'Jhon', active: true}, {id: 2, name: 'Sam', active: true}, {id: 3, name: 'Ryan', active: false}];
  countries: any = [];
  population = false;

  constructor(private PersonService: PersonService) { }


  show() {
    this.PersonService.getPersons(this.value).subscribe((data: any) => {
      console.log(data)
      this.countries = data;
      this.countries = data.sort((a: any, b: any) => a.population - b.population);
      if(this.population) {
        this.countries = data.filter((country: any) => country.population < 700000);
      }
    });
  }

}
