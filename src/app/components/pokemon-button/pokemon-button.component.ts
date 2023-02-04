import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input,OnInit } from '@angular/core';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';

@Component({
  selector: 'app-pokemon-button',
  templateUrl: './pokemon-button.component.html',
  styleUrls: ['./pokemon-button.component.css']
})
export class PokemonButtonComponent {
  myPokemons: any[] = [];
  @Input() pokemonName: string = "";
  
  get loading(): boolean {
    return this.pokeCatalogueService.loading;
  }

  constructor(
    private readonly pokeCatalogueService: PokemonCatalogueService,
    ){}
  ngOnInit(): void {}
  addPokemonClick = () =>{
    console.log(this.pokemonName.toString())
    this.pokeCatalogueService.addPokemonToTrainer(this.pokemonName.toString()).subscribe({
      next: (response: any) => {
        console.log("NEXT", response);
      },
      error: (error: HttpErrorResponse) => {
        console.log("ERROR", error.message)
      }
    })
    // this.pokeCatalogueService.getPokemonData(this.pokemonName).subscribe((response: any) => {
    //   this.myPokemons.push(response);
    //   console.log(this.pokemonName.toString())
    // })
  } 
}
