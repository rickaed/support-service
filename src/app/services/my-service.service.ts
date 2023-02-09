import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
 
  cocktails: any = [];
  constructor() { };

  gatData() {

  };

  setData() {

  };
  setCocktail(cocktailFromAPI: any) {
    this.cocktails.push(cocktailFromAPI[0]);
    console.log(this.cocktails)
  }
  getCocktails() {
    return this.cocktails
  }
  
}
