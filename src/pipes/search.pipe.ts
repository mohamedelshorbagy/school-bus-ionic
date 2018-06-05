import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: any[],prop: string, term: string): any[] {
    if (!arr) {
      return [];
    }
    if (!term || term.length === 0) {
      return arr;
    }

    // Convert the input
    term = term.toLowerCase();
    return arr.filter(item => {
      return item[prop].toLowerCase().includes(term);
    })

  }

}
