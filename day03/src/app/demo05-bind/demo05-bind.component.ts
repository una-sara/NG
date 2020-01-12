import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo05-bind',
  templateUrl: './demo05-bind.component.html',
  styleUrls: ['./demo05-bind.component.css']
})
export class Demo05BindComponent implements OnInit {
  count = 0
  imgUrl = "../../assets/3.jpg"

  constructor() { }

  ngOnInit() {
  }

  handleClick(){
    console.log('btn is clicked')
    this.count++
  }

}
