import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length <= 2){
      return null;
    }
    const resultsearch = [];
    for (const poke of value) {
      if (poke.name.toLowerCase().indexOf(arg.toLowerCase()) >- 1) {
       resultsearch.push(poke);
      }
    }
    return resultsearch;
  }

}
