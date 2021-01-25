import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private htpp: HttpClient) {}
  getpokeapi(index: number ){
  return this.htpp.get(`https://pokeapi.co/api/v2/pokemon/${index}`);
  }
}


