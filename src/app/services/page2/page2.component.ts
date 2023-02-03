import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  cocktails: any ;

  constructor(private dataService: MyServiceService) { };

  ngOnInit(): void {
    this.getCocktailsFromService()
    console.log('nom du cocktail :', this.cocktails)
  };

  getCocktailsFromService() {
    console.log('recuperation en page 2 :', this.dataService.getCocktails())
    this.cocktails = this.dataService.getCocktails()
    console.log('mes cocktails :', this.cocktails)
    
  };
}
