import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from './interfaces';

export interface Data {
  drinks:[],
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'support_API';
  quotes: Quote[] = [];
  constructor(private http: HttpClient) { }


  ngOnInit() {
    // traitement 
    this.getSimpsonsQuotes();
    this.getSimpsonsQuotesAwait();
    this.getSimpsonsQuotesHttpObservable();
    this.GetAlcool()
    this.getAlcool2()
    
  }
  // methode  Fetch
  getSimpsonsQuotes() {
    return fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then((quotesFromApi: Quote[]) => {
        console.log(quotesFromApi);
        this.quotes = quotesFromApi
      })
  }
  // idem autre methode  Await
  async getSimpsonsQuotesAwait() {
    const response = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    const quotesFromApi: Quote[] = await response.json();

    console.log(quotesFromApi);
    this.quotes = quotesFromApi
  }

  // idem autre methode Observable HTTCLIENT A IMPORTER DANS CONSTRUCTEUR ET DANS APP MODULE
  getSimpsonsQuotesHttpObservable() {
    return this.http.get<Quote[]>("https://thesimpsonsquoteapi.glitch.me/quotes")
      .subscribe((quotesFromApi: Quote[]) => {
        console.log(quotesFromApi)
      })

  }

  // Apel API ET 2eme pour FILTRE
//   https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
// https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila
// Tu va fiare l'appel API pour récupérer la margarita
// Et à partir du résultat du 1ère appel, récuperer tous les drinks qui utilisent de la Tequilla
  async GetAlcool() {
    let reponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
    let data = await reponse.json();
    console.log(data);

    let ingredient = data.drinks[0].strIngredient1;
    let reponse2 = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    let data2 = await reponse2.json();
    console.log(data2);

  }
  // idem autre methode Observable HTTCLIENT A IMPORTER DANS CONSTRUCTEUR ET DANS APP MODULE
    getAlcool2(){
      this.http.get<Data>("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita").subscribe(data=>{
        console.log(data.drinks)//!!typage any
        data.drinks.forEach((el:any) =>console.log(el))// forEach extrait les elemnts du tableau 1 par 1
      }) //ATTENTION au typage () comme (el:any) ci dessus


    }


}
