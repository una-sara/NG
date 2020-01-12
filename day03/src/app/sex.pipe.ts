import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sex'
})
export class SexPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value)
    if(value == 0){
      return '女'
    }else{
      return '男'
    }
  }

}
