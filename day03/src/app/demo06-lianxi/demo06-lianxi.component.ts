import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo06-lianxi',
  templateUrl: './demo06-lianxi.component.html',
  styleUrls: ['./demo06-lianxi.component.css']
})
export class Demo06LianxiComponent implements OnInit {
  stuList = [
    {
      stuName:'张三',
      stuScore:80,
      stuSex:0
    },
    {
      stuName:'john',
      stuScore:50,
      stuSex:1
    },
    {
      stuName:'mike',
      stuScore:100,
      stuSex:0
    },
    {
      stuName:'miller',
      stuScore:30,
      stuSex:0
    },
    {
      stuName:'lincoln',
      stuScore:90,
      stuSex:0
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
