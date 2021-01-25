import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { RoutenotComponent } from './components/routenot/routenot.component';

const routes: Routes = [
  {path : 'pokemons' , component: PokemonsComponent},
  {path : 'favoritos' , component: FavoritesComponent},
  {path: '' , pathMatch: 'full', redirectTo: 'pokemons'},
  {path : '**' , component: RoutenotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
