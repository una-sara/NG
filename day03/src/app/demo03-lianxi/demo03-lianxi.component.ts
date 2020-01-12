import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo03-lianxi',
  templateUrl: './demo03-lianxi.component.html',
  styleUrls: ['./demo03-lianxi.component.css']
})
export class Demo03LianxiComponent implements OnInit {
  myList = [100,200,300]

  constructor() { }

  ngOnInit() {
  }

}
