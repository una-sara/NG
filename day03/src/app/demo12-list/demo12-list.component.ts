import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo12-list',
  templateUrl: './demo12-list.component.html',
  styleUrls: ['./demo12-list.component.css']
})
export class Demo12ListComponent implements OnInit {
  myList = [100,200,300]
  constructor() { }

  ngOnInit() {
  }

  rcvMsg(msg){
    console.log("父组件List接收到Item组件传来的数据是"+msg)
    //从myList数组中 删除指定下标msg所对应的元素
    this.myList.splice(msg,1)
  }

}
