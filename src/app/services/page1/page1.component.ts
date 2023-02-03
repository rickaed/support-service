import { Component, OnInit } from '@angular/core';
import { MyServiceService } from "../../services/my-service.service";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor(private dataService: MyServiceService) { };

  ngOnInit(): void {

  };

  getCocktail() {
    return fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13501")
      .then(response => response.json())
      .then(cocktail => {this.dataService.setCocktail(cocktail.drinks)});
  };

  async getCocktailsFromService() {
    const urls = ["https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17222", "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13501", "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17225", "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=14610"];
    for await (const url of urls) {
      const res = await fetch(url);
      const cocktail = await res.json();
      this.dataService.setCocktail(cocktail.drinks)
      console.log("cocktail : ", cocktail.drinks);
    }
  }
}
