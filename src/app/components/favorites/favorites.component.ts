import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  public favoritos: any;
  public busquedafav: string | undefined;
  constructor() {
    this.favoritos = JSON.parse(localStorage.getItem('fav') || '{}');

  }

  ngOnInit(): void {
    console.log(this.favoritos.length);
  }
  eliminar(poke: any) {
    const compr = this.favoritos.findIndex((e: any) => e.id === poke.id);
    if (compr > -1) {
      this.favoritos.splice(compr, 1);
      localStorage.clear();
      localStorage.setItem('fav', JSON.stringify(this.favoritos));
    }
  }
}
