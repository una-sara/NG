import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo07-data',
  templateUrl: './demo07-data.component.html',
  styleUrls: ['./demo07-data.component.css']
})
export class Demo07DataComponent implements OnInit {
  uName = "JohnReese"

  constructor() { }

  ngOnInit() {
  }

  handleModelChange(){
    console.log(this.uName)
  }

}
