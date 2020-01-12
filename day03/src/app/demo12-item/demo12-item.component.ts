import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-demo12-item',
  templateUrl: './demo12-item.component.html',
  styleUrls: ['./demo12-item.component.css']
})
export class Demo12ItemComponent implements OnInit {
  // 指定一个可以触发deleteEvent事件类型的事件触发器
  @Output() deleteEvent = new EventEmitter()
  @Input() myValue = ""
  @Input() itemIndex = 0

  constructor() { }

  ngOnInit() {
  }

  // 按下删除按钮要执行的一个方法
  handleClick(){
    //触发绑定给当前组件的deleteEvent事件并传值
    this.deleteEvent.emit(this.itemIndex)
  }

}
