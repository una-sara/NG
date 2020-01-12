import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  isDev = false
  constructor() { }

  //准备在此服务类中，封装一个方法来控制日志输出的功能
  printSth(msg){
    if(this.isDev){
      console.log(msg)
    }
  }

}
