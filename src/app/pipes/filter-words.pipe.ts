import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterWords'})
export class FilterWordsPipe implements PipeTransform {
    transform(value: any[], letter: string): any[] {
        return value.filter((data) => {
            return data.name.toLowerCase().startsWith(letter.toLowerCase());
        });
    }
}
