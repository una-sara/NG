import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-demo11-header',
  templateUrl: './demo11-header.component.html',
  styleUrls: ['./demo11-header.component.css']
})
export class Demo11HeaderComponent implements OnInit {
  //通过Input来指定要接收的属性的值:
  @Input() myTitle = ""//this.myTitle

  constructor() { }
  
  //ngOnInit是angular中组件生命周期中其中一个负责初始化的钩子函数
  ngOnInit() {
    console.log(this.myTitle)
  }

}
