import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo04-dir',
  templateUrl: './demo04-dir.component.html',
  styleUrls: ['./demo04-dir.component.css']
})
export class Demo04DirComponent implements OnInit {
  myList = [100,200,300]
  isMember = true
  answer = 'a'

  constructor() { }

  ngOnInit() {
  }

}
