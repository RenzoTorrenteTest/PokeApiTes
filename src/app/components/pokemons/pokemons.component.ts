import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  public pokemons: any[] = [];
  public lugia: any[] = [];
  public favoritos: Pokeobj[] = [];
  public busquedapoke: string | undefined;
  public loading: boolean;
  constructor(private poke: PokeapiService) {
    this.loading = true;
  }

  ngOnInit(): void {
    this.getpoke();

  }
  getpoke() {
    let pokeobject: Pokeobj;
    for (let i = 1; i <= 300; i++) {
      this.poke.getpokeapi(i).subscribe((resp: any) => {
        console.log(resp);
        pokeobject = {
          name: resp.name,
          img: resp.sprites.front_default,
          talla: resp.height + 'metros',
          peso: resp.weight + 'kg',
          habilidad: resp.abilities[0].ability.name,
          habilidadsec: resp.abilities[1].ability.name,
          tipo: resp.types[0].type.name,
          experiencia: resp.base_experience,
          movimiento: resp.moves[0].move.name,
          id: i
        };
        this.pokemons.push(pokeobject);
        this.lugia = this.pokemons.filter((obj) => obj.name === 'lugia');
        this.loading = false;
      });
    }
    console.log(this.pokemons);
    console.log(this.lugia);
  }
  enviarfav(poke: Pokeobj) {
    console.log(poke);
    const duplicado = this.favoritos.findIndex((e: any) => e.id === poke.id);
    if (duplicado > -1) {
      this.favoritos.splice(duplicado, 1);
    } else {
      this.favoritos.push(poke);

    }
    localStorage.setItem('fav', JSON.stringify(this.favoritos));

  }
}
interface Pokeobj {
  name: string;
  img: string;
  talla: string;
  habilidad: string;
  habilidadsec: string;
  tipo: string;
  experiencia: string;
  peso: string;
  movimiento: string;
  id: number;
}