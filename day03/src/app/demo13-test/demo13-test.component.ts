import { Component, OnInit } from '@angular/core';
import {LogService} from '../log.service'

@Component({
  selector: 'app-demo13-test',
  templateUrl: './demo13-test.component.html',
  styleUrls: ['./demo13-test.component.css']
})
export class Demo13TestComponent implements OnInit {

  constructor(private myService:LogService) { }

  ngOnInit() {
    //输出一句话：‘初始化完毕’
    //V1: console.log('初始化完毕')
    //V2: 借用服务中方法来控制日志信息
    this.myService.printSth('初始化完毕')
  }

}
