import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeatService {
  myTimer = null;
  constructor() { }
  //开始心跳
  startBeat(){
    if(this.myTimer){
      return
    }
    // 每隔1s输出‘正在心跳’    
    this.myTimer = setInterval(()=>{
      console.log('正在心跳')
    },1000)
  }
  //结束心跳
  stopBeat(){
    clearInterval(this.myTimer)
    this.myTimer = null
  }
}
