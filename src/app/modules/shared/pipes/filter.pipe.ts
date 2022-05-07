import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {

  // filter a list based on an object key and a searchText
  transform(list: any[], key: string, searchText: string): any[] {
    if (!list) {
      return [];
    }
    if (!searchText) {
      return list;
    }

    return list.filter(item => {
      return item[key].toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
    });
  }
}