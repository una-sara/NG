import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'even'
})
export class EvenPipe implements PipeTransform {
  // 传递一个数组，返回偶数构成的数组
  transform(value: any, args?: any): any {
    console.log(args)
    var tmpList = []
    for(var i=0;i<value.length;i++){
      if(args == 1){//期待：偶数
        if(value[i]%2 == 0){
          tmpList.push(value[i])
        }
      }else if(args == 0){//期待：奇数
        if(value[i]%2 != 0){
          tmpList.push(value[i])
        }
      }      
    }
    return tmpList;
  }

}
