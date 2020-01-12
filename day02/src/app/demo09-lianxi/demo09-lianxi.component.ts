import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo09-lianxi',
  templateUrl: './demo09-lianxi.component.html',
  styleUrls: ['./demo09-lianxi.component.css']
})
export class Demo09LianxiComponent implements OnInit {
  myInput = ""
  myList = []

  constructor() { }

  ngOnInit() {
  }

  handleClick(){
    //获取输入框的值 this.myInput
    //将得到的值追加到数组的尾部
    this.myList.push(this.myInput)
    // 清空输入框的值
    this.myInput = ""
  }

}
