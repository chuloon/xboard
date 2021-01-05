import { Pipe, PipeTransform } from "@angular/core";
import { Card } from "../classes/card";

@Pipe({
    name: 'filterCards',
    pure: false
})
export class FilterCardsPipe implements PipeTransform {
    transform(items: Card[], status: string): any {
        if(!items || !status) return items;
        
        return items.filter(item => item.status.toLowerCase() == status.toLowerCase());        
    }
}